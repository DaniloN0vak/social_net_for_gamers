using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Social_network.Models.Data;

[ApiController]
[Route("api/games")]
public class GamesController : ControllerBase
{
    private readonly AppDBContext _context;
    public GamesController(AppDBContext context) => _context = context;

    [HttpGet("{slug}")]
    public async Task<IActionResult> GetGameBySlug(string slug)
    {
        var game = await _context.Games
            .Include(g => g.Genres)
            .Include(g => g.Categories)
            .Include(g => g.Sections)
            .FirstOrDefaultAsync(g => g.Slug == slug);

        if (game == null) return NotFound();
        return Ok(game);
    }
}