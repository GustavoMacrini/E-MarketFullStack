
using E_Market.Server.Domain.Categories;
using E_Market.Server.Services.Categories;
using Microsoft.AspNetCore.Mvc;

namespace E_Market.Server.Controllers
{

    [Route("api/v1/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private CategoryService _categoryService;
        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        public async Task<IResult> CreateCategory(CategoryRequest request) 
        {
            try
            {
                CategoryResponse response = await _categoryService.CreateCategoryAsync(request);
                return Results.Created($"api/v1/category/{response.Id}", response);
            }catch(Exception e)
            {
                return Results.BadRequest(e.Message);
            }
        }

        [HttpGet()]
        public async Task<IResult> Get([FromQuery] Guid? id = null)
        {
            if (id == null)
            {
                List<CategoryResponse> categories = await _categoryService.GetAllCategoriesAsync();
                return Results.Ok(categories);
            }

            try
            {
                CategoryResponse category = await _categoryService.GetCategoryAsync(id.Value);
                return Results.Ok(category);
            }
            catch (Exception e)
            {
                return Results.NotFound(e.Message);
            }
        }
    }
}
