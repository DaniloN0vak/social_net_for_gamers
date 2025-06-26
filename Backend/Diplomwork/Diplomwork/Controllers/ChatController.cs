﻿using Diplomwork.Models;
using Diplomwork.Models.DatabaseModels.Tables;
using Diplomwork.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Diplomwork.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : Controller
    {

        private readonly ChatService _chatService;

        public ChatController(ChatService chatService)
        {
            _chatService = chatService;
        }

        [HttpGet("chats/user/{userId}")]
        public async Task<IActionResult> GetChats(int userId)
        {
            List<ChatDto> chatDtos = await _chatService.GetChats(userId);
            return Ok(chatDtos);
        }

        [HttpGet("chats/{chatId}")]
        public async Task<IActionResult> GetChat(int chatId)
        {
            ChatDto? chat = await _chatService.ChatToSend(chatId);
            if(chat == null) { return NotFound(); }
            return Ok(chat);
        }

        [HttpPost("chats/{chatId}/messages")]
        public async Task<IActionResult> SendMessage(int chatId)
        {
            var form = Request.Form;
            string content = form["content"];
            int userId = int.Parse(form["userId"]);
            var mediaList = new List<MediumDto>();
            int index = 0;

            Console.WriteLine(form[$"media[{index}].name"]);

            while (true)
            {
                var file = form.Files.GetFile($"media[{index}].file");
                if (file == null) break;
                var isBloored = bool.Parse(form[$"media[{index}].isBloored"]);
                var name = form[$"media[{index}].name"];
                var type = form[$"media[{index}].type"];

                var size = double.Parse(form[$"media[{index}].size"]);


                string userFolder = $"User_{userId}";
                string uploadsRoot = Path.Combine(Directory.GetCurrentDirectory(), "UploadedMedia");
                string uploadsFolder = Path.Combine(uploadsRoot, userFolder);

                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                string extension = Path.GetExtension(file.FileName);
                string uniqueFileName = $"{Guid.NewGuid()}{extension}";
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);


                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                mediaList.Add(new MediumDto
                {
                    File = file,
                    IsBloored = isBloored,
                    Name = name,
                    Type = type,
                    Src = $"/UploadedMedia/{userFolder}/{uniqueFileName}",
                    Size = size
                });

                index++;
            }
            try
            {
                await _chatService.SaveMessage(content, chatId, userId, mediaList); 
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(ex.Message);
            }

            return Ok(new
            {
                success = true
            });
        }



    }
}
