using Dapper;
using Microsoft.AspNetCore.Mvc;
using Object.Model;
using System.Data;
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
        var result = await connection.QueryAsync<Planets>("GetPlanets");
        return Ok(result);
    }

    [HttpPost("GetRobots")]
    public async Task<ActionResult<List<Robots>>> GetRobots([FromBody]int planetId)
    {
        using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        var result = await connection.QueryAsync<Robots>("GetRobots", new {PlanetId = planetId}, commandType: CommandType.StoredProcedure);
        return Ok(result);
    }

    [HttpGet("Captain")]
    public async Task<ActionResult<List<Captain>>> GetCaptain()
    {
        using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        var result = await connection.QueryAsync<Captain>("GetCaptain");
        return Ok(result);
    }

    [HttpPost("UpdatePlanet")]
    public async Task<ActionResult<List<Planets>>> UpdatePlanet(Planets planets)
    {
        using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        var result = await connection.QueryAsync<Planets>("UpdatePlanet", new { PlanetId = planets.PlanetsId, PlanetDescription = planets.Description, PlanetStatus = planets.Status }, commandType: CommandType.StoredProcedure);
        return Ok(result);
    }


}
