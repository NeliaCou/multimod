import { Component, Input, OnInit } from '@angular/core';
import Mug from '../../../../../models/mug';
import { MugListService } from '../../../../../shared/mug-list.service';

@Component({
  selector: 'app-get-mug',
  templateUrl: './get-mug.component.html',
  styleUrl: './get-mug.component.css'
})
export class GetMugComponent implements OnInit {
  mugs: Mug[] = [];

  constructor(private mugService: MugListService) {}

  ngOnInit() {
  this.mugs = this.mugService.getMugList();
}
}
