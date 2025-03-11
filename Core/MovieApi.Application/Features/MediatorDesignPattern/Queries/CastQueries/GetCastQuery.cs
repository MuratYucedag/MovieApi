using MediatR;
using MovieApi.Application.Features.MediatorDesignPattern.Results.CastResults;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieApi.Application.Features.MediatorDesignPattern.Queries.CastQueries
{
    public class GetCastQuery : IRequest<List<GetCastQueryResult>>
    {
    }
}