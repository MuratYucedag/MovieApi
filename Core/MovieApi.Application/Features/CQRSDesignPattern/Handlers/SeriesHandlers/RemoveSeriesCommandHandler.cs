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
    public class RemoveSeriesCommandHandler
    {
        private readonly MovieContext _context;
        public RemoveSeriesCommandHandler(MovieContext context)
        {
            _context = context;
        }
        public async Task Handle(RemoveSeriesCommand command)
        {
            var value = await _context.Serieses.FindAsync(command.SeriesId);
            _context.Serieses.Remove(value);
            await _context.SaveChangesAsync();
        }
    }
}
