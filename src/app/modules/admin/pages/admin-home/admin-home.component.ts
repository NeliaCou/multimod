import { Component } from '@angular/core';
import { UserService } from '../../../../shared/user.service';
import User from '../../../../models/user';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  users!: User[];

  constructor(private userService: UserService) { 
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data; // Affecter les données des utilisateurs récupérées au tableau users
      },
    );
  }
}
