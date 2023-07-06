using System.ComponentModel.DataAnnotations;

namespace api.Models;

public record Address(
    [MinLength(3), MaxLength(30)] string HomeNumberName,
    [MinLength(3), MaxLength(50)] string Street,
    [MinLength(3), MaxLength(20)] string City,
    [MinLength(3), MaxLength(20)] string State,
    [MinLength(10), MaxLength(10)] string ZipCode
);
