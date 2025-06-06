using E_Market.Server.Domain.Orders;
using E_Market.Server.Domain.Products;
using Microsoft.EntityFrameworkCore;

namespace E_Market.Server.Services.Data
{
    public class ApplicationDbContext : DbContext
    {
        DbSet<Category> Categories { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<Order> Orders { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
                
        }

    }
}
