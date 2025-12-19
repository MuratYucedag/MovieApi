using MovieApi.Application.Features.CQRSDesignPattern.Queries.MovieQueries;
using MovieApi.Application.Features.CQRSDesignPattern.Queries.SeriesQueries;
using MovieApi.Application.Features.CQRSDesignPattern.Results.MovieResults;
using MovieApi.Application.Features.CQRSDesignPattern.Results.SeriesResults;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesignPattern.Handlers.SeriesHandlers
{
    public class GetSeriesByIdQueryHandler
    {
        private readonly MovieContext _context;
        public GetSeriesByIdQueryHandler(MovieContext context)
        {
            _context = context;
        }

        public async Task<GetSeriesByIdQueryResult> Handle(GetSeriesByIdQuery query)
        {
            var value = await _context.Serieses.FindAsync(query.SeriesId);
            return new GetSeriesByIdQueryResult
            {
                CoverImageUrl = value.CoverImageUrl,
                CreatedYear = value.CreatedYear,
                Description = value.Description,
                Rating = value.Rating,
                Status = value.Status,
                Title = value.Title,
                AverageEpisodeDuration= value.AverageEpisodeDuration,
                SeriesId = value.SeriesId,
                SeasonCount = value.SeasonCount,
                FirstAirDate= value.FirstAirDate,
                EpisodeCount= value.EpisodeCount,
                CategoryId= value.CategoryId
            };
        }
    }
}
