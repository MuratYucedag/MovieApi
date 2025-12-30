using Microsoft.OpenApi.Models;

namespace MovieApi.WebApi.Extensions
{
    public static class SwaggerExtensions
    {
        public static IServiceCollection AddSwaggerServices(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "My Api",
                    Version = "v1"
                });
            });
            return services;
        }
    }
}
