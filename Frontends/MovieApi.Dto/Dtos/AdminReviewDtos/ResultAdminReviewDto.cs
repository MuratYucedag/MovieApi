using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Dto.Dtos.AdminReviewDtos
{
    public class ResultAdminReviewDto
    {
        public int ReviewId { get; set; }
        public string ReviewComment { get; set; }
        public byte UserRating { get; set; }
        public DateTime ReviewDate { get; set; }
        public bool Status { get; set; }
        public string UserId { get; set; }
        public int MovieId { get; set; }
        public bool IsSpoiler { get; set; }
        public int LikeCount { get; set; }
        public decimal? SentimentScore { get; set; }
    }
}
