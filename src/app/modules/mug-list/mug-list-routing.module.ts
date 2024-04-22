import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMugComponent } from './components/feature/add-mug/add-mug.component';

const routes: Routes = [
  { path: 'home', 
  component: AddMugComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MugListRoutingModule { }
