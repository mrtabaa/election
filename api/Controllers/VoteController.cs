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
    private readonly IMongoCollection<Vote> _collectionVote;
    private readonly IMongoCollection<President> _collectionPresident;
    // Dependency Injection
    public VoteController(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collectionVote = dbName.GetCollection<Vote>("votes");
        _collectionPresident = dbName.GetCollection<President>("presidents");
    }

    [HttpPost("add")]
    public ActionResult<Vote> Create(Vote userInput)
    {
        bool hasDocs = _collectionVote.AsQueryable().Where<Vote>(v => v.NationalCode == userInput.NationalCode).Any();

        if(hasDocs)
            return BadRequest($"The National Code {userInput.NationalCode} has already voted.");

        Vote vote = new Vote(
            Id: null,
            NationalCode: userInput.NationalCode,
            FirstName: userInput.FirstName,
            LastName: userInput.LastName,
            Age: userInput.Age,
            Address: new Address(
                HomeNumberName: userInput.Address.HomeNumberName,
                StreetAddress: userInput.Address.StreetAddress,
                City: userInput.Address.City,
                State: userInput.Address.State,
                ZipCode: userInput.Address.ZipCode
            ),
            SelectedPresidentId: userInput.SelectedPresidentId
        );

        _collectionVote.InsertOne(vote);

        return vote;
    }

    [HttpGet("get-all")]
    public ActionResult<IEnumerable<Vote>> GetAll()
    {
        List<Vote> votes = _collectionVote.Find<Vote>(new BsonDocument()).ToList();

        if(!votes.Any())
            return NoContent();

        return votes;
    }

    [HttpGet("get-president-votes-by-id/{id}")]
    public ActionResult<IEnumerable<Vote>> GetPresidentVotes(string id)
    {
        List<Vote> presidentVotes = _collectionVote.Find(v => v.SelectedPresidentId == id).ToList();

        if(!presidentVotes.Any())
            return NoContent();

        return presidentVotes;
    }
}
