using MovieApi.Application.Features.CQRSDesignPattern.Commands.MovieCommands;
using MovieApi.Domain.Entities;
using MovieApi.Persistence.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.CQRSDesignPattern.Handlers.MovieHandlers
{
    public class CreateMovieCommandHandler
    {
        private readonly MovieContext _context;
        public CreateMovieCommandHandler(MovieContext context)
        {
            _context = context;
        }
        public async Task Handle(CreateMovieCommand command)
        {
            _context.Movies.Add(new Movie
            {
                CoverImageUrl = command.CoverImageUrl,
                CreatedYear = command.CreatedYear,
                Description = command.Description,
                Duration = command.Duration,
                Rating = command.Rating,
                ReleaseDate = command.ReleaseDate,
                Status = command.Status,
                Title = command.Title
            });
            await _context.SaveChangesAsync();
        }
    }
}
