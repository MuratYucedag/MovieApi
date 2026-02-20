using MediatR;
using MovieApi.Application.Features.MediatorDesignPattern.Results.ReviewResults;

namespace MovieApi.Application.Features.MediatorDesignPattern.Queries.ReviewQueries
{
    public class GetReviewQuery:IRequest<List<GetReviewQueryResult>>
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
