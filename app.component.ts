import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent, ModalOptions } from "./modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  modalOptions: ModalOptions = {
    title: 'Premium Modal Title',
    body: 'This is a premium modal with customizable options. You can easily modify its behavior and appearance using simple class names.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    size: 'modal-md', // Options: modal-sm, modal-md, modal-lg, modal-xl, modal-full
    position: 'modal-center', // Options: modal-top, modal-bottom, modal-center
    animation: 'zoom', // Options: fade, slide-down, slide-up, slide-left, slide-right, zoom
    scrollable: true,
    backdrop: 'modal-backdrop-black',
    closeOnBackdropClick: true,
    showCloseButton: true,
  };

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


}
