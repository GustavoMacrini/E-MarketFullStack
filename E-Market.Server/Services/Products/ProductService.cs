using E_Market.Server.Domain.Categories;
using E_Market.Server.Domain.Products;
using E_Market.Server.Services.Categories;
using E_Market.Server.Services.Data;
using Microsoft.EntityFrameworkCore;

namespace E_Market.Server.Services.Products
{
    public class ProductService
    {
        private ApplicationDbContext _context;

        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ProductResponse> CreateProductAsync(ProductRequest request)
        {
            Category category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == request.CategoryId);
            if (category == null) 
            {
                throw new Exception($"Category {request.CategoryId} not found.");
            }

            Product product = new Product(request.Name, category, request.Description, request.Price, "CreatedBy");
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();

            return new ProductResponse(product.Id, product.Name, product.Category.Id, product.Description, product.Price);
        }


    }
}
