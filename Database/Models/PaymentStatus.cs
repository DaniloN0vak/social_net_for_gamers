namespace Diplomwork.Database.Models
{
    public class PaymentStatus
    {
        public short Id { get; set; }
        public string Name { get; set; }
        public virtual List<Payment> Payments { get; set; }
        public PaymentStatus() 
        {
            this.Payments = new List<Payment>();
        }
    }
}
