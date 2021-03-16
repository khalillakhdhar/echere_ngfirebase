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
  constructor(private api:UserService) { }

  ngOnInit(): void {
    //début de lancement
    this.user=new User();
  }

}
