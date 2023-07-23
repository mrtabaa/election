using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace api.Models;

public record Admin(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id, //hamishe sabet
    [MinLength(3), MaxLength(30)] string Email,
    [MinLength(3), MaxLength(50)] string Password,
    [MinLength(3), MaxLength(50)] string? ConfirmPassword
);
