namespace Diplomwork.Database.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime CreatedAt {  get; set; }
        public DateTime? UpdatedAt { get; set; }
        public short StatusId { get; set; }
        public OrderStatus Status { get; set; }
        public int BuyerId {  get; set; }
        public User Buyer { get; set; }
        public int ItemId {  get; set; }
        public Item Item { get; set; }
        public Order()
        {
            this.CreatedAt = DateTime.Now;
            this.UpdatedAt = DateTime.Now;
        }
    }
}
