import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './components/feature/account-home/account-home.component';
import { UserDetailsComponent } from './components/feature/user-details/user-details.component';

const routes: Routes = [
  { path: 'home', 
    component: AccountHomeComponent 
  },
  { path: 'home/:id', 
    component: UserDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
