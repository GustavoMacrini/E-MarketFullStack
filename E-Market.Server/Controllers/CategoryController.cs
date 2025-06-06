
using E_Market.Server.Domain.Products;
using E_Market.Server.Services.Data;
using Microsoft.AspNetCore.Mvc;

namespace E_Market.Server.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public CategoryController(ApplicationDbContext context) 
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IResult> CreateCategory(string name) 
        {
            Category category = new Category(name, "usuario1", "usuario1");
            await _context.AddAsync(category);
            await _context.SaveChangesAsync();
            return Results.Created();
        }

        [HttpGet]
        public string Get()
        {
            return "teste";
        }
    }
}
