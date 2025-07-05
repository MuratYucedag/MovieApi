using Microsoft.AspNetCore.Mvc;

namespace MovieApi.WebUI.ViewComponents.MovieDetailViewComponents
{
    public class _MovieDetailRelatedMoviesComponentPartial : ViewComponent
    {
        public IViewComponentResult Invoke()
        {

            return View();
        }
    }
}
