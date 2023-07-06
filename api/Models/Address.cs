using System.ComponentModel.DataAnnotations;

namespace api.Models;

public record Address(
    [MinLength(3), MaxLength()] string HomeNumberName,
    [MinLength(3), MaxLength(50)] string StreetAddress,
    [MinLength(3), MaxLength(20)] string City,
    [MinLength(3), MaxLength(20)] string State,
    [MinLength(10), MaxLength(10)] string ZipCode
);
