import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
user:User;
users:any;
  constructor(private api:UserService) { }

  ngOnInit(): void {
    //début de lancement
    this.user=new User();
    this.affiche();
  }
save()
{
  let us=Object.assign({},this.user);
  this.api.create_NewUser(us);
  alert("ajouté avec succés");
  this.user=new User();
}
affiche()
{
this.api.read_Users().subscribe(data => {

  this.users = data.map(e => {
    return {
     id: e.payload.doc.id,

     nom: e.payload.doc.data()["nom"],
     prenom: e.payload.doc.data()["prenom"],
     login: e.payload.doc.data()["login"],
     telephone: e.payload.doc.data()["telephone"],
     ville: e.payload.doc.data()["ville"],



    };
  });
  console.log(this.users);

});
}
}
