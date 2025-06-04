namespace E_Market.Server.Domain.Products
{
    public class Product : Entity
    {
        public string Name { get; private set; }
        public Category Category { get; private set; }
        public string Description { get; private set; }
        public bool HasStock { get; private set; }
        public bool Active { get; private set; } = true;
        public decimal Price { get; set; }

        public Product() { }

        public Product(string name, Category category, string description, bool hasStock, decimal price, string createdBy)
        {
            Name = name;
            Category = category;
            Description = description;
            HasStock = hasStock;
            Price = price;

            CreatedBy = createdBy;
            EditedBy = createdBy;
            CreatedOn = DateTime.Now;
            EditedOn = DateTime.Now;
        }
    }
}
