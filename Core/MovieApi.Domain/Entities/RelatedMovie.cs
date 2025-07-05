using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Domain.Entities
{
    public class RelatedMovie
    {
        public int RelatedMovieId { get; set; }
        public int MovieId { get; set; }
        public int UserId { get; set; }
        public bool IsWatch { get; set; }
    }
}
