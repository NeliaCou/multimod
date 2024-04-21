import { Component, Input } from '@angular/core';
import User from '../../../../models/user';

@Component({
  selector: 'app-user-details-container',
  templateUrl: './user-details-container.component.html',
  styleUrl: './user-details-container.component.css'
})
export class UserDetailsContainerComponent {

  @Input() user!: User;

}
