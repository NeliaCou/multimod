import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/feature/admin-home/admin-home.component';
import { AdminCardContainerComponent } from './components/ui/admin-card-container/admin-card-container.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminCardContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
