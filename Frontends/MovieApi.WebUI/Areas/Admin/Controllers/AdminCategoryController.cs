using Microsoft.AspNetCore.Mvc;
using MovieApi.Dto.Dtos.AdminCategoryDtos;
using Newtonsoft.Json;
using System.Text;

namespace MovieApi.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class AdminCategoryController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AdminCategoryController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IActionResult> CategoryList()
        {
            var client = _httpClientFactory.CreateClient();
            var responseMessage = await client.GetAsync("https://localhost:7053/api/Categories");
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonData = await responseMessage.Content.ReadAsStringAsync();
                var values = JsonConvert.DeserializeObject<List<AdminResultCategoryDto>>(jsonData);
                return View(values);
            }
            return View();
        }

        [HttpGet]
        public IActionResult CreateCategory()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateCategory(AdminCreateCategoryDto adminCreateCategoryDto)
        {
            var client = _httpClientFactory.CreateClient();
            var jsonData = JsonConvert.SerializeObject(adminCreateCategoryDto);
            StringContent stringContent = new StringContent(jsonData, Encoding.UTF8, "application/json");
            var responseMessage = await client.PostAsync("https://localhost:7053/api/Categories", stringContent);
            if(responseMessage.IsSuccessStatusCode)
            {
                return RedirectToAction("CategoryList");
            }
            return View();
        }

        public async Task<IActionResult> DeleteCategory(int id)
        {
            var client= _httpClientFactory.CreateClient();
            var responseMessage = await client.DeleteAsync("https://localhost:7053/api/Categories?id=" + id);
            if (responseMessage.IsSuccessStatusCode)
            {
                return RedirectToAction("CategoryList", "AdminCategory", new { area = "Admin" });
            }
            return View();
        }
    }
}
