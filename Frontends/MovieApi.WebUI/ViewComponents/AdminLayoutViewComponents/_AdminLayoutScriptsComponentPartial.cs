using Microsoft.AspNetCore.Mvc;

namespace MovieApi.WebUI.ViewComponents.AdminLayoutViewComponents
{
    public class _AdminLayoutScriptsComponentPartial:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
