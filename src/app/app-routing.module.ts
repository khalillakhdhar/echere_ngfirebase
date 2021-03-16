import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilComponent } from './profil/profil.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'inscription',component:InscriptionComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'profil',component:ProfilComponent},
  {path: 'chat',component:ChatComponent},
  {path: '',component:ConnexionComponent},
  {path: 'connexion',component:ConnexionComponent},
  {path: 'homme',component:HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
