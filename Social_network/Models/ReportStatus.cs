namespace Social_network.Models
{
    public class ReportStatus
    {
        public short Id { get; set; }
        public string Name { get; set; }
        public virtual List<Report> Reports { get; set; }
        public ReportStatus()
        {
            Reports = new List<Report>();
        }
    }
}
