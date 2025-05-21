namespace Diplomwork.Database.Models
{
    public class Currency
    {
        public short Id { get; set; }
        public string Name { get; set; }
        public double AmountOfOneDollar { get; set; }
        public virtual List<Item> Items { get; set; }
        public virtual List<Payment> Payments { get; set; }
        public virtual List<Transfer> Transfers { get; set; }
        public Currency()
        {
            this.Items = new List<Item>();
            this.Payments = new List<Payment>();
            this.Transfers = new List<Transfer>();  
        }
    }
}
