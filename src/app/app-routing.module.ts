import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account', 
    loadChildren: () =>  import('./modules/account/account.module').then(m  => m.AccountModule) 
},
  {
    path: 'admin', 
    loadChildren: () =>  import('./modules/admin/admin.module').then(m  => m.AdminModule) 
},
{
  path: 'mug', 
  loadChildren: () =>  import('./modules/mug-list/mug-list.module').then(m  => m.MugListModule) 
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
