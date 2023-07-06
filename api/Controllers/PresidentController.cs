using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PresidentController : ControllerBase
{
    private readonly IMongoCollection<President> _collection;
    // Dependency Injection
    public PresidentController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<President>("presidents");
    }

    [HttpPost("register")]
    public ActionResult<President> Create(President userInput)
    {
        // check if ANY doc with this NationalCode exists
        // President president = _collection.Find<President>(p => p.NationalCode == userInput.NationalCode).FirstOrDefault();

        // if(president is not null)
        //     BadRequest($"A president with {userInput.NationalCode} is already registered.");

        bool hasDocs = _collection.AsQueryable().Where<President>(p => p.NationalCode == userInput.NationalCode).Any();

        if(hasDocs)
            return BadRequest($"A president with National Code {userInput.NationalCode} is already registered.");

        President president = new President(
            Id: null,
            NationalCode: userInput.NationalCode,
            FirstName: userInput.FirstName,
            LastName: userInput.LastName,
            Age: userInput.Age,
            Education: userInput.Education,
            Email: userInput.Email,
            Address: new Address(
                HomeNumberName: userInput.Address.HomeNumberName,
                StreetAddress: userInput.Address.StreetAddress,
                City: userInput.Address.City,
                State: userInput.Address.State,
                ZipCode: userInput.Address.ZipCode
            )
        );

        _collection.InsertOne(president);

        return president;
    }

    [HttpGet("get-all")]
    public ActionResult<IEnumerable<President>> GetAll()
    {
        List<President> presidents = _collection.Find<President>(new BsonDocument()).ToList();

        if(!presidents.Any())
            return NoContent();

        return presidents;
    }
}
