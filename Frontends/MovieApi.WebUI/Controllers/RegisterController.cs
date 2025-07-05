using Microsoft.AspNetCore.Mvc;
using MovieApi.Dto.Dtos.UserRegisterDtos;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;

namespace MovieApi.WebUI.Controllers
{
    public class RegisterController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public RegisterController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SignUp(CreateUserRegisterDto createUserRegisterDto)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(createUserRegisterDto);
            StringContent stringContent = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var response = await client.PostAsync("https://localhost:7053/api/Registers", stringContent);

            if (response.IsSuccessStatusCode)
            {
                return RedirectToAction("SignIn", "Login");
            }
            ViewBag.error = "Kayıt başarısız oldu lütfen tekrar deneyiniz!";
            return View();

        }
    }
}
