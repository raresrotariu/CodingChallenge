using Dapper;
using Microsoft.AspNetCore.Mvc;
using Object.Model;
using System.Data.SqlClient;

namespace CodingChallenge.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StandardController : ControllerBase
{
    

    private readonly IConfiguration _configuration;
    public StandardController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
        

    [HttpGet]
    public async Task<ActionResult<List<Planets>>> GetPlanets()
    {
        using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        var da = await connection.QueryAsync<Planets>("GetPlanets");
        return Ok(da);
    }

}
