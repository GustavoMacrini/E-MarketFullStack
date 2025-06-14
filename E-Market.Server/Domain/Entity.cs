﻿namespace E_Market.Server.Domain
{
    public class Entity
    {
        public Guid Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public string EditedBy { get; set; }
        public DateTime EditedOn { get; set; }

        public Entity()
        {
            Id = Guid.NewGuid();
        }
    }
}
