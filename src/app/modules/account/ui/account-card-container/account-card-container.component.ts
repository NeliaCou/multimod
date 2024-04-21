import { Component, Input } from '@angular/core';
import User from '../../../../models/user';

@Component({
  selector: 'app-account-card-container',
  templateUrl: './account-card-container.component.html',
  styleUrl: './account-card-container.component.css'
})
export class AccountCardContainerComponent {
  @Input() randomUser!: User;
}
