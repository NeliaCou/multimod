import { Component } from '@angular/core';
import Mug from '../../../../../models/mug';
import { MugListService } from '../../../../../shared/mug-list.service';

@Component({
  selector: 'app-add-mug',
  templateUrl: './add-mug.component.html',
  styleUrl: './add-mug.component.css'
})
export class AddMugComponent {

  newMug: Mug = new Mug('', 0); 

  constructor(private mugService: MugListService) { 
  }

  addNewMugToMugList() {
    this.mugService.addMug(this.newMug)
    this.newMug = new Mug('', 0);
  }
}
