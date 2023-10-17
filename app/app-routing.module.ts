import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';



  const routes: Routes = [
    { path: '', redirectTo: 'HomePage', pathMatch: 'full' },
    {path: 'header', component: HeaderComponent},
    { path : 'HomePage', component : HomePageComponent},
    { path : 'MyForm', component : MyFormComponent},
    { path : 'Dashboard', component : DashboardComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
