namespace Diplomwork.Models.DTO
{
    public class MediumDto
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public string Src { get; set; }
        public string Name { get; set; }
        public IFormFile File { get; set; }
        public bool IsBloored { get; set; }
    }
}
