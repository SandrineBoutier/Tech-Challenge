using Argonautes.DTO;
using Argonautes.Helpers;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Argonautes.Controllers
{
    [Route ("[controller]")] // [controller] est un placeholder pour le nom du controleur, correspond à la route api/Argonaut
    [ApiController]
    public class ArgonautController : ControllerBase
    {
        private readonly DataContext dataContext;

        public ArgonautController(DataContext dataContext)
        {
            //on s'assure d'avoir accès à notre DbContext puisqu'on va récupérer/afficher les noms rentrés dans la Bdd
            this.dataContext = dataContext;
        }


        [HttpGet]
        public async Task<ActionResult<List<ArgonautDTO>>> Get() // je récupère une liste EF que je convertis en DTO
        {
            try
            {
                // Si la table est vide retourne 204 NoContent response
                var myArgonauts = await dataContext.Argonauts.ToListAsync();
                if (myArgonauts.Count == 0)
                    return NoContent();
                return myArgonauts.ToDTOs();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost]
        public async Task AddArgonaut(ArgonautDTO argonaut)
        {
            try
            {
                Argonaut a = argonaut.ToEFModel();
                dataContext.Argonauts.Add(a);
                await dataContext.SaveChangesAsync(); // on sauvegarde le changement (l'ajout)
                
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }
            
        }
    }
}
