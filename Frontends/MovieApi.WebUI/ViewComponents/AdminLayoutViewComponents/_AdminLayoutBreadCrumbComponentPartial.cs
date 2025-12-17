using Microsoft.AspNetCore.Mvc;

namespace MovieApi.WebUI.ViewComponents.AdminLayoutViewComponents
{
    public class _AdminLayoutBreadCrumbComponentPartial:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
