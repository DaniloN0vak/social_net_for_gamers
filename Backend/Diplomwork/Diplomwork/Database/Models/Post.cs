namespace Diplomwork.Database.Models
{
    public class Post
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public string? ImageUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public bool IsCommunityPost {  get; set; }
        public string? Language {  get; set; }
        public int? AuthorUserId {  get; set; }
        public User? AuthorUser { get; set; }
        public int? AuthorCommunityId {  get; set; }
        public Community? AuthorCommunity { get; set; }
        public long? ReplyToPostId {  get; set; }
        public Post? ReplyToPost {  get; set; }
        public virtual List<Post> Posts { get; set; }
        public virtual List<Report> Reports { get; set; }
        public virtual List<PostTag> PostTags { get; set; }

        public Post()
        {
            this.CreatedAt = DateTime.Now;
            this.UpdatedAt = DateTime.Now;
            this.IsCommunityPost = false;
            this.Posts = new List<Post>();
            this.Reports = new List<Report>();
            this.PostTags = new List<PostTag>();
        }
    }
}
