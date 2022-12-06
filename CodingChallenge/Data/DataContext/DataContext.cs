using Microsoft.EntityFrameworkCore;

namespace Data.DataContext;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) { } 

}
