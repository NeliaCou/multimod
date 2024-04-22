import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MugListRoutingModule } from './mug-list-routing.module';
import { AddMugComponent } from './components/feature/add-mug/add-mug.component';
import { FormsModule } from '@angular/forms';
import { GetMugComponent } from './components/feature/get-mug/get-mug.component';


@NgModule({
  declarations: [
    AddMugComponent,
    GetMugComponent
  ],
  imports: [
    CommonModule,
    MugListRoutingModule,
    FormsModule
  ]
})
export class MugListModule { }
