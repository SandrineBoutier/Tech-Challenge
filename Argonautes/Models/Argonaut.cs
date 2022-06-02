using System.ComponentModel.DataAnnotations.Schema; // permet d'utiliser les classes d’attributs pour définir des métadonnées pour les contrôles de données ASP.NET et ASP.NET MVC

namespace Argonautes.Models
{
    public class Argonaut
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] //attribut pour auto-incrémentation de l'ID
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty; // chaine vide par défaut
    }

}
