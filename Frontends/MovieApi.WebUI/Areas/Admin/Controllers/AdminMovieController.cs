using Microsoft.AspNetCore.Mvc;
using MovieApi.Dto.Dtos.AdminCategoryDtos;
using MovieApi.Dto.Dtos.AdminMovieDtos;
using Newtonsoft.Json;
using System.Text;

namespace MovieApi.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class AdminMovieController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AdminMovieController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IActionResult> MovieList()
        {
            var client = _httpClientFactory.CreateClient();
            var responseMessage = await client.GetAsync("https://localhost:7053/api/Movies");
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonData = await responseMessage.Content.ReadAsStringAsync();
                var values = JsonConvert.DeserializeObject<List<AdminResultMovieDto>>(jsonData);
                return View(values);
            }
            return View();
        }

        [HttpGet]
        public IActionResult CreateMovie()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateMovie(CreateAdminMovieDto createAdminMovieDto)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(createAdminMovieDto);
            StringContent stringContent = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync("https://localhost:7053/api/Movies", stringContent);
            if (responseMessage.IsSuccessStatusCode)
            {
                return RedirectToAction("MovieList");
            }
            return View();
        }
    }
}
