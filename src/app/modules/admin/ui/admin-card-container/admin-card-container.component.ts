import { Component, Input } from '@angular/core';
import User from '../../../../models/user';

@Component({
  selector: 'app-admin-card-container',
  templateUrl: './admin-card-container.component.html',
  styleUrl: './admin-card-container.component.css'
})
export class AdminCardContainerComponent {
  @Input() users!: User[];
}
