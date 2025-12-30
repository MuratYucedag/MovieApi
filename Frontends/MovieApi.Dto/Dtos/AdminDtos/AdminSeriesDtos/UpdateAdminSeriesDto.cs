using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Dto.Dtos.AdminDtos.AdminSeriesDtos
{
    public class UpdateAdminSeriesDto
    {
        public int SeriesId { get; set; }
        public string Title { get; set; }
        public string CoverImageUrl { get; set; }
        public decimal Rating { get; set; }
        public string Description { get; set; }
        public DateTime FirstAirDate { get; set; }
        public int CreatedYear { get; set; }
        public int? AverageEpisodeDuration { get; set; }
        public int SeasonCount { get; set; }
        public int EpisodeCount { get; set; }
        public string Status { get; set; }
        public int CategoryId { get; set; }
    }
}
