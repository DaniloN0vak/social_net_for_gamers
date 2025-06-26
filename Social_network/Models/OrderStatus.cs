namespace Social_network.Models
{
    public class OrderStatus
    {
        public short Id { get; set; }
        public string Name { get; set; }
        public virtual List<Order> Orders { get; set; }
        public OrderStatus()
        {
            this.Orders = new List<Order>();
        }
    }
}
