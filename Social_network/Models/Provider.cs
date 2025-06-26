namespace Social_network.Models
{
    public class Provider
    {
        public short Id { get; set; }
        public string Name { get; set; }
        public virtual List<Payment> Payments { get; set; }
        public Provider()
        {
            this.Payments = new List<Payment>();
        }
    }
}
