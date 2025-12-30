using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Application.Features.CQRSDesignPattern.Commands.SeriesCommands;
using MovieApi.Application.Features.CQRSDesignPattern.Handlers.SeriesHandlers;
using MovieApi.Application.Features.CQRSDesignPattern.Queries.SeriesQueries;

namespace SeriesApi.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeriesesController : ControllerBase
    {
        private readonly GetSeriesByIdQueryHandler _getSeriesByIdQueryHandler;
        private readonly GetSeriesQueryHandler _getSeriesQueryHandler;
        private readonly CreateSeriesCommandHandler _createSeriesCommandHandler;
        private readonly UpdateSeriesCommandHandler _updateSeriesCommandHandler;
        private readonly RemoveSeriesCommandHandler _removeSeriesCommandHandler;

        public SeriesesController(GetSeriesByIdQueryHandler getSeriesByIdQueryHandler, GetSeriesQueryHandler getSeriesQueryHandler, CreateSeriesCommandHandler createSeriesCommandHandler, UpdateSeriesCommandHandler updateSeriesCommandHandler, RemoveSeriesCommandHandler removeSeriesCommandHandler)
        {
            _getSeriesByIdQueryHandler = getSeriesByIdQueryHandler;
            _getSeriesQueryHandler = getSeriesQueryHandler;
            _createSeriesCommandHandler = createSeriesCommandHandler;
            _updateSeriesCommandHandler = updateSeriesCommandHandler;
            _removeSeriesCommandHandler = removeSeriesCommandHandler;
        }

        [HttpGet]
        public async Task<IActionResult> SeriesList()
        {
            var value = await _getSeriesQueryHandler.Handle();
            return Ok(value);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSeries(CreateSeriesCommand command)
        {
            await _createSeriesCommandHandler.Handle(command);
            return Ok("Dizi ekleme işlemi başarılı");
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteSeries(int id)
        {
            await _removeSeriesCommandHandler.Handle(new RemoveSeriesCommand(id));
            return Ok("Dizi silme işlemi başarılı");
        }

        [HttpGet("GetSeries")]
        public async Task<IActionResult> GetSeries(int id)
        {
            var value = await _getSeriesByIdQueryHandler.Handle(new GetSeriesByIdQuery(id));
            return Ok(value);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSeries(UpdateSeriesCommand command)
        {
            await _updateSeriesCommandHandler.Handle(command);
            return Ok("Dizi güncelleme işlemi başarılı");
        }
    }
}
