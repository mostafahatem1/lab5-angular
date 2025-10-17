import { Component } from '@angular/core';
import { Shared } from '../../services/shared';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
username: string = 'User';
childMessage: string = '';

  constructor(public sharedService: Shared) {}

  updateShared() {
    this.sharedService.updateValue(`Updated from Parent: ${this.username}`);
  }

  onMessageReceived(message: string) {
    this.childMessage = message;
  }
}
