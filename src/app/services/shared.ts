import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Shared {
  sharedValue: string = 'initial Shared Value';

  updateValue(newValue: string) {
    this.sharedValue = newValue;
  }

  getValue(): string {
    return this.sharedValue;
  }
  
}
