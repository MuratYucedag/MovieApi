using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Domain.Entities
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public bool Status { get; set; }
        public string? Description { get; set; }
        public List<Movie> Movies { get; set; }
        public List<Series> Serieses { get; set; }
    }
}
