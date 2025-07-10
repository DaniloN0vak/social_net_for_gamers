using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Data;
using Social_network.Models.Tables;
using System;

namespace Social_network.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly AppDBContext _context;

        public GamesController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateGame([FromBody] Game game)
        {
            if (await _context.Games.AnyAsync(g => g.Slug == game.Slug))
                return BadRequest("Гра з таким Slug вже існує");

            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return Ok(game);
        }

        [HttpGet] //НА ЦЬОМУ Я ЗУПИНИВСЯ!
        public async Task<ActionResult<IEnumerable<Game>>> GetGame()
        {
            return await _context.Games.ToListAsync();
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetGame(string slug)
        {
            var game = await _context.Games
                .Include(g => g.Genres)
                .Include(g => g.Categories)
                .Include(g => g.Sections)
                .FirstOrDefaultAsync(g => g.Slug == slug);

            if (game == null)
                return NotFound();

            return Ok(game);
        }
    }
}
