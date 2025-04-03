using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.MediatorDesignPattern.Commands.TagCommands
{
    public class UpdateTagCommand:IRequest
    {
        public int TagId { get; set; }
        public string Title { get; set; }
    }
}
