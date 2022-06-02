using Argonautes.DTO;

namespace Argonautes.Helpers
{
    public static class Extensions
    {
        public static ArgonautDTO ToDTO(this Argonaut argonaut)
        {
            ArgonautDTO dto = new ArgonautDTO();
            dto.Name = argonaut.Name;
            return dto;
        }

        public static Argonaut ToEFModel(this ArgonautDTO dto)
        {
            Argonaut argonaut = new Argonaut();
            argonaut.Name = dto.Name;
            return argonaut;
        }

        public static List<Argonaut> ToEFModels(this List<ArgonautDTO> dtos)
        {
            List<Argonaut> dto = new List<Argonaut>();
            foreach(var d in dtos)
            {
                dto.Add(d.ToEFModel());
            }
            return dto;
        }

        //SB:
        public static List<ArgonautDTO> ToDTOs(this List<Argonaut> argonauts)
        {
            List<ArgonautDTO> argonautsList = new List<ArgonautDTO>();
            foreach (var a in argonauts)
            {
                argonautsList.Add(a.ToDTO());
            }
            return argonautsList;
        }

    }
}
