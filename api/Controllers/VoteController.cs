using api.Models;
using api.Settings;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoteController : ControllerBase
{
    private readonly IMongoCollection<Vote> _collection;

    // Dependency Injection
    public VoteController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Vote>("votes");
    }

    [HttpPost("add")]
    public ActionResult<Vote> Create(Vote userInput)
    {
        bool hasDocs = _collection.AsQueryable().Where<Vote>(v => v.NationalCode == userInput.NationalCode).Any();

        if(hasDocs)
            return BadRequest($"The National Code {userInput.NationalCode} has already voted.");

        Vote vote = new Vote(
            Id: null,
            NationalCode: userInput.NationalCode,
            FirstName: userInput.FirstName,
            LastName: userInput.LastName,
            Age: userInput.Age,
            SelectedPresidentId: userInput.SelectedPresidentId
        );

        _collection.InsertOne(vote);

        return vote;
    }

    [HttpGet("get-all")]
    public ActionResult<IEnumerable<Vote>> GetAll()
    {
        List<Vote> votes = _collection.Find<Vote>(new BsonDocument()).ToList();

        if(!votes.Any())
            return NoContent();

        return votes;
    }

    [HttpGet("get-president-votes-by-id/{id}")]
    public ActionResult<IEnumerable<Vote>> GetPresidentVotes(string id)
    {
        List<Vote> presidentVotes = _collection.Find(v => v.SelectedPresidentId == id).ToList();

        if(!presidentVotes.Any())
            return NoContent();

        return presidentVotes;
    }
}
