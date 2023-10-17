import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    // Créer un objet FormData
    const formData = new FormData();
    // Ajouter le fichier avec le nom 'profile_pic'
    formData.append('profile_pic', file);
    // Envoyer le fichier au serveur avec la méthode post
    return this.http.post('upload.php', formData);
  }
}


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MyFormComponent,
    DashboardComponent,
    UploadAvatarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
