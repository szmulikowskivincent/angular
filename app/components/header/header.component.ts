import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  file!: File; // Le fichier sélectionné par l'utilisateur
  
  imageURL!: string; // L'URL de l'image affichée
  fileService: any;

  /*constructor(private fileService: FileService) { }*/

  onFileChange(event: Event) {
    // Récupérer l'élément input
    const input = event.target as HTMLInputElement;
    // Vérifier s'il y a un fichier sélectionné
    if (input.files && input.files.length) {
      // Récupérer le premier fichier
      this.file = input.files[0];
      // Créer un objet FileReader
      const reader = new FileReader();
      // Définir une fonction à exécuter quand la lecture est terminée
      reader.onload = e => {
        // Affecter le résultat de la lecture à imageURL
        this.imageURL = reader.result as string;
      };
      // Lire le fichier comme une URL
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit() {
    // Vérifier si le fichier existe
    if (this.file) {
      // Envoyer le fichier au serveur
      this.fileService.uploadFile(this.file).subscribe(
        (        response: any) => {
          // Afficher la réponse du serveur
          console.log(response);
        },
        (        error: any) => {
          // Afficher l'erreur éventuelle
          console.error(error);
        }
      );
    }
  }
}
    
