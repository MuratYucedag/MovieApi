using MovieApi.Application.Features.CQRSDesignPattern.Commands.MovieCommands;
using MovieApi.Application.Features.CQRSDesignPattern.Commands.SeriesCommands;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesignPattern.Handlers.SeriesHandlers
{
    public class UpdateSeriesCommandHandler
    {
        private readonly MovieContext _context;
        public UpdateSeriesCommandHandler(MovieContext context)
        {
            _context = context;
        }
        public async Task Handler(UpdateSeriesCommand command)
        {
            var value = await _context.Serieses.FindAsync(command.SeriesId);
            value.Rating = command.Rating;
            value.Status = command.Status;
            value.CoverImageUrl = command.CoverImageUrl;
            value.CreatedYear = command.CreatedYear;
            value.Description = command.Description;
            value.Title = command.Title;
            value.FirstAirDate = command.FirstAirDate;
            value.AverageEpisodeDuration = command.AverageEpisodeDuration;
            value.SeasonCount = command.SeasonCount;
            value.EpisodeCount = command.EpisodeCount;
            value.CategoryId = command.CategoryId;
            await _context.SaveChangesAsync();
        }
    }
}
