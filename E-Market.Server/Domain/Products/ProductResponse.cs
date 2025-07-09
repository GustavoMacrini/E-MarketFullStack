namespace E_Market.Server.Domain.Products
{
    public record ProductResponse(Guid Id, string Name, Guid CategoryId, string Description, decimal Price);
}
