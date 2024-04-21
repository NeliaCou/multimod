import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { AccountCardContainerComponent } from './ui/account-card-container/account-card-container.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    AccountCardContainerComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
