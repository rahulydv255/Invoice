using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Inovice_API.Models
{
    public class AddInvoiceRequest
    {
        public int srno { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public int sac { get; set; }
        public int hsn { get; set; }
        public int quntity { get; set; }
        public int rate { get; set; }
        public int amount { get; set; }
        public int invoice { get; set; }
        public string createdDate { get; set; }

    }
}