using Microsoft.EntityFrameworkCore;

namespace Argonautes.Models
{
    public class DataContext : DbContext
    {
        /*Constructeur qui attend un paramètre "options" de type <DbContext> : 
         * il contient la chaîne de connexion et le provider de la BDD (qui indique quel type de BDD on utilise (ici un serveur SQL)
         */
        public DataContext(DbContextOptions<DataContext> options) : base(options) { } 

        public DbSet <Argonaut> Argonauts { get; set; } //mappage de l'entité au contexte
    }
}
