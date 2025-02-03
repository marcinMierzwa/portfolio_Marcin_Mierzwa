import { CommonModule } from '@angular/common';
import { Component, OnChanges, input, signal } from '@angular/core';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css',
})
export class ToasterComponent implements OnChanges {
  isToasterVisible = input.required<boolean>();
  isToasterError = input.required<boolean>();
  isToasterRemove!: boolean;
  isToasterRemoveError!: boolean;

  removeToaster() {
    this.isToasterRemove = !this.isToasterVisible();
  }

  removeToasterError() {
    this.isToasterRemoveError = !this.isToasterError();
  }

  ngOnChanges(): void {
    this.isToasterRemove = this.isToasterVisible();
    this.isToasterRemoveError = this.isToasterError();
  }
}
