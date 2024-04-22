import { Injectable } from '@angular/core';
import Mug from '../models/mug';

@Injectable({
  providedIn: 'root'
})
export class MugListService {

  private mugList: Mug[] = []; 

  constructor() { }

  addMug(newMug: Mug): void {
    this.mugList.push(newMug);
  }

  getMugList(): Mug[] {
    return this.mugList;
  }
}
