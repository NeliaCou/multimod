import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './components/feature/account-home/account-home.component';
import { AccountCardContainerComponent } from './components/ui/account-card-container/account-card-container.component';
import { UserDetailsComponent } from './components/feature/user-details/user-details.component';
import { UserDetailsContainerComponent } from './components/ui/user-details-container/user-details-container.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    AccountCardContainerComponent,
    UserDetailsComponent,
    UserDetailsContainerComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
