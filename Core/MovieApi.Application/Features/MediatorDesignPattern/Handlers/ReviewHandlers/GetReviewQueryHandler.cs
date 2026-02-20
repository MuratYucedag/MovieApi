using MediatR;
using Microsoft.EntityFrameworkCore;
using MovieApi.Application.Features.MediatorDesignPattern.Queries.ReviewQueries;
using MovieApi.Application.Features.MediatorDesignPattern.Results.ReviewResults;
using MovieApi.Persistence.Context;

namespace MovieApi.Application.Features.MediatorDesignPattern.Handlers.ReviewHandlers
{
    public class GetReviewQueryHandler : IRequestHandler<GetReviewQuery, List<GetReviewQueryResult>>
    {
        private readonly MovieContext _context;
        public GetReviewQueryHandler(MovieContext context)
        {
            _context = context;
        }
        public async Task<List<GetReviewQueryResult>> Handle(GetReviewQuery request, CancellationToken cancellationToken)
        {
            var values = await _context.Reviews.Skip((request.Page - 1) * request.PageSize).Take(request.PageSize)
                        .Select(x => new GetReviewQueryResult
                        {
                            IsSpoiler = x.IsSpoiler,
                            LikeCount = x.LikeCount,
                            MovieId = x.MovieId,
                            ReviewComment = x.ReviewComment,
                            ReviewDate = x.ReviewDate,
                            ReviewId = x.ReviewId,
                            SentimentScore = x.SentimentScore,
                            Status = x.Status,
                            UserId = x.UserId,
                            UserRating = x.UserRating
                        }).ToListAsync();
            return values;
        }
    }
}
