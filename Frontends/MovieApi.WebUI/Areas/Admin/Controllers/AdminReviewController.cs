using Microsoft.AspNetCore.Mvc;
using MovieApi.Dto.Dtos.AdminReviewDtos;
using Newtonsoft.Json;

namespace MovieApi.WebUI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class AdminReviewController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public AdminReviewController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<IActionResult> ReviewList(int page = 1, int pageSize = 10)
        {
            var client = _httpClientFactory.CreateClient();
            var responseMessage = await client.GetAsync($"https://localhost:7053/api/Reviews?page={page}&pageSize={pageSize}");
            if (responseMessage.IsSuccessStatusCode)
            {
                var jsonData = await responseMessage.Content.ReadAsStringAsync();
                var values = JsonConvert.DeserializeObject<List<ResultAdminReviewDto>>(jsonData);

                var totalCount = int.Parse(responseMessage.Headers.GetValues("X-Total-Count").FirstOrDefault() ?? "0");

                ViewBag.CurrentPage = page;
                ViewBag.PageSize = pageSize;
                ViewBag.TotalCount = totalCount;
                ViewBag.TotalPages = (int)Math.Ceiling((double)totalCount / pageSize);

                return View(values);
            }
            return View();
        }
    }
}
