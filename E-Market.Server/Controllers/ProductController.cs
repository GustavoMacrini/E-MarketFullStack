using E_Market.Server.Domain.Products;
using E_Market.Server.Services.Products;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_Market.Server.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ProductService _productService;
        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpPost()]
        public async Task<IResult> CreateProductAsync(ProductRequest request)
        {
            try
            {
                await _productService.CreateProductAsync(request);
                return Results.Created();
            }
            catch (Exception e) 
            {
                return Results.BadRequest(e.Message);
            }
        }
    }
}
