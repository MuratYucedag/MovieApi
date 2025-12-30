using MovieApi.Application.Features.CQRSDesignPattern.Handlers.CategoryHandlers;
using MovieApi.Application.Features.CQRSDesignPattern.Handlers.MovieHandlers;
using MovieApi.Application.Features.CQRSDesignPattern.Handlers.SeriesHandlers;
using MovieApi.Application.Features.CQRSDesignPattern.Handlers.UserRegisterHandlers;

namespace MovieApi.WebApi.Extensions
{
    public static class ServiceRegistrationExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<GetCategoryQueryHandler>();
            services.AddScoped<GetCategoryByIdQueryHandler>();
            services.AddScoped<CreateCategoryCommandHandler>();
            services.AddScoped<RemoveCategoryCommandHandler>();
            services.AddScoped<UpdateCategoryCommandHandler>();

            services.AddScoped<GetMovieQueryHandler>();
            services.AddScoped<GetMovieByIdQueryHandler>();
            services.AddScoped<CreateMovieCommandHandler>();
            services.AddScoped<RemoveMovieCommandHandler>();
            services.AddScoped<UpdateMovieCommandHandler>();
            services.AddScoped<GetMovieWithCategoryQueryHandler>();

            services.AddScoped<GetSeriesQueryHandler>();
            services.AddScoped<GetSeriesByIdQueryHandler>();
            services.AddScoped<CreateSeriesCommandHandler>();
            services.AddScoped<RemoveSeriesCommandHandler>();
            services.AddScoped<UpdateSeriesCommandHandler>();

            services.AddScoped<CreateUserRegisterCommandHandler>();

            return services;

        }
    }
}
