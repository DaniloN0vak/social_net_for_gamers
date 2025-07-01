using Microsoft.AspNetCore.Mvc;
using Social_network.Models.Data;
using Social_network.Models.Tables;
using Microsoft.EntityFrameworkCore;
using Social_network.Models;

namespace Social_network.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {
        private readonly AppDBContext _context;

        public PostController(AppDBContext context)
        {
            _context = context;
        }

        // POST: api/Post
        [HttpPost]
        public async Task<IActionResult> CreatePost([FromBody] CreatePostDto postDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var newPost = new Post
            {
                Content = postDto.Content,
                CreatedAt = DateTime.UtcNow,
                Id = postDto.UserId,
                Media = postDto.Media.Select(m => new PostMedia
                {
                    Url = m.Url,
                    Type = m.Type,
                    Size = m.Size
                }).ToList()
            };

            _context.Posts.Add(newPost);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Post created successfully", postId = newPost.Id });
        }
    }
}
