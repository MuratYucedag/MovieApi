using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Dto.Dtos.AdminCategoryDtos
{
    public class AdminResultCategoryDto
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public int MovieCount { get; set; }
        public int ReviewCount { get; set; }
        public double AvgRating { get; set; }
        public bool IsActive { get; set; }
    }
}
