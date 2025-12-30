using Microsoft.AspNetCore.Mvc;
using MovieApi.Dto.Dtos.AdminDtos.AdminSeriesDtos;
using Newtonsoft.Json;
using System.Text;

namespace SeriesApi.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class AdminSeriesController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AdminSeriesController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IActionResult> SeriesList()
        {
            var client = _httpClientFactory.CreateClient();
            var responseMessage = await client.GetAsync("https://localhost:7053/api/Serieses");
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonData = await responseMessage.Content.ReadAsStringAsync();
                var values = JsonConvert.DeserializeObject<List<AdminResultSeriesDto>>(jsonData);
                return View(values);
            }
            return View();
        }

        [HttpGet]
        public IActionResult CreateSeries()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateSeries(CreateAdminSeriesDto createAdminSeriesDto)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(createAdminSeriesDto);
            StringContent stringContent = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync("https://localhost:7053/api/Serieses", stringContent);
            if (responseMessage.IsSuccessStatusCode)
            {
                return RedirectToAction("SeriesList");
            }
            return View();
        }
    }
}
