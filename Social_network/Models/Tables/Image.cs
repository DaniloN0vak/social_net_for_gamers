﻿namespace Social_network.Models.Tables
{
    public class Image
    {
        public long Id { get; set; }
        public required string Url { get; set; }
        public long MessageId { get; set; }
        public required Message Message { get; set; }
    }
}
