using Microsoft.AspNetCore.Mvc;

namespace MovieApi.WebUI.Controllers
{
    public class LoginController : Controller
    {

        [HttpGet]
        public IActionResult SignIn()
        {
            return View();
        }
    }
}
