import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
user:User;
  constructor() { }

  ngOnInit(): void {
    //début de lancement
    this.user=new User();
  }

}
