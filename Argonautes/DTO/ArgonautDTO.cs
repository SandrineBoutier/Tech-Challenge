

using Newtonsoft.Json;

namespace Argonautes.DTO
{
    public class ArgonautDTO
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
