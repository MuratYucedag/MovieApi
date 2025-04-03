using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieApi.Application.Features.MediatorDesignPattern.Commands.CastCommands;
using MovieApi.Application.Features.MediatorDesignPattern.Queries.CastQueries;

namespace MovieApi.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CastsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public CastsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public IActionResult CastList()
        {
            var value = _mediator.Send(new GetCastQuery());
            return Ok(value);
        }

        [HttpPost]
        public IActionResult CreateCast(CreateCastCommand command)
        {
            _mediator.Send(command);
            return Ok("Ekleme işlemi başarılı");
        }

        [HttpDelete]
        public IActionResult DeleteCast(int id)
        {
            _mediator.Send(new RemoveCastCommand(id));
            return Ok("Silme işlemi başarılı");
        }

        [HttpGet("GetCastById")]
        public IActionResult GetCastById(int id)
        {
            var value = _mediator.Send(new GetCastByIdQuery(id));
            return Ok(value);
        }

        [HttpPut]
        public IActionResult UpdateCast(UpdateCastCommand command)
        {
            _mediator.Send(command);
            return Ok("Güncelleme işlemi başarılı");
        }
    }
}
