import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shared } from '../../services/shared';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() receivedData: string = '';
   @Output() messageEvent = new EventEmitter<string>();

     constructor(private sharedService: Shared) {}

  sendMessage() {
    this.messageEvent.emit(`hello from child: ${this.receivedData}`);
  }

   updateShared() {
    this.sharedService.updateValue(`Updated from Child: ${this.receivedData}`);
  }


}
