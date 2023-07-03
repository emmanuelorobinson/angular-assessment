import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal() {
    this.showModal = false;
    this.closeModal.emit();
  }


}
