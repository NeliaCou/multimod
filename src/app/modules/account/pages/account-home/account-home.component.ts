import { Component } from '@angular/core';
import User from '../../../../models/user';
import { UserService } from '../../../../shared/user.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.css'
})
export class AccountHomeComponent {
  randomUser!: User;

  constructor(private userService: UserService) { 
    this.getRandomUser();
  }

  getRandomUser(): void{
    this.userService.getUsers().subscribe(
      (data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.randomUser = data[randomIndex];
      },
    );
  }
}
