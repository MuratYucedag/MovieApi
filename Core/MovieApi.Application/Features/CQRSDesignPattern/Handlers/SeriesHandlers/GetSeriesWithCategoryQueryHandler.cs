using Microsoft.EntityFrameworkCore;
using MovieApi.Application.Features.CQRSDesignPattern.Results.SeriesResults;
using MovieApi.Persistence.Context;

namespace MovieApi.Application.Features.CQRSDesignPattern.Handlers.SeriesHandlers
{
    public class GetSeriesWithCategoryQueryHandler
    {
        private readonly MovieContext _context;
        public GetSeriesWithCategoryQueryHandler(MovieContext context)
        {
            _context = context;
        }
        public async Task<List<GetSeriesWithCategoryQueryResult>> Handle()
        {
            var values = await _context.Serieses.Include(x=>x.Category).ToListAsync();
            return values.Select(x => new GetSeriesWithCategoryQueryResult
            {
                CoverImageUrl = x.CoverImageUrl,
                CreatedYear = x.CreatedYear,
                Description = x.Description,
                Rating = x.Rating,
                Status = x.Status,
                Title = x.Title,
                AverageEpisodeDuration = x.AverageEpisodeDuration,
                CategoryId = x.CategoryId,
                EpisodeCount = x.EpisodeCount,
                FirstAirDate = x.FirstAirDate,
                SeasonCount = x.SeasonCount,
                SeriesId = x.SeriesId,
                CategoryName = x.Category.CategoryName
            }).ToList();
        }
    }
}
