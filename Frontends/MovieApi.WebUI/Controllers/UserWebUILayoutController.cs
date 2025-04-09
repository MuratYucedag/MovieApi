using Microsoft.AspNetCore.Mvc;

namespace MovieApi.WebUI.Controllers
{
    public class UserWebUILayoutController : Controller
    {
        public IActionResult LayoutUI()
        {
            return View();
        }
    }
}
