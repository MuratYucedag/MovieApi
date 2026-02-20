using MovieApi.Application.Features.MediatorDesignPattern.Handlers.ReviewHandlers;
using MovieApi.Application.Features.MediatorDesignPattern.Handlers.TagHandlers;

namespace MovieApi.WebApi.Extensions
{
    public static class MediatRExtensions
    {
        public static IServiceCollection AddMediatorServices(this IServiceCollection services)
        {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetTagQueryHandler).Assembly));
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetReviewQueryHandler).Assembly));
            return services;
        }
    }
}
