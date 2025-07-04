using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Social_network.Models.Data;

[ApiController]
[Route("api/[controller]")]
public class CommunityController : ControllerBase
{
    private readonly AppDBContext _context;

    public CommunityController(AppDBContext context)
    {
        _context = context;
    }

    [HttpGet("{slug}")]
    public IActionResult GetCommunityBySlug(string slug)
    {
        var community = _context.Communities
            .Include(c => c.Posts)
            .FirstOrDefault(c => c.Slug == slug);

        if (community == null)
            return NotFound();

        return Ok(community);
    }
}