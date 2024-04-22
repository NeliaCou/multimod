import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../shared/user.service';
import User from '../../../../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  user!: User;

  constructor(
    private activateRoute: ActivatedRoute, 
    private userService: UserService
  ){};

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
      const userId = Number(params['id']);
      this.userService.getUsers().subscribe(
        users => {
          this.user = users.find(user => user.id === userId) as User;
        },
      )
    }
    );    
  }
}
