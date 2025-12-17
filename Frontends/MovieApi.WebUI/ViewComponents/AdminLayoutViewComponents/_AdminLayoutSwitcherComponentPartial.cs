using Microsoft.AspNetCore.Mvc;

namespace MovieApi.WebUI.ViewComponents.AdminLayoutViewComponents
{
    public class _AdminLayoutSwitcherComponentPartial:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
