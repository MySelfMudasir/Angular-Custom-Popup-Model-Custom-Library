import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

export interface ModalOptions {
  title: string;
  body: string;
  size?: 'modal-sm' | 'modal-md' | 'modal-lg' | 'modal-xl' | 'modal-full';
  position?: 'modal-top' | 'modal-bottom' | 'modal-center';
  animation?:
    | 'fade'
    | 'slide-down'
    | 'slide-up'
    | 'slide-left'
    | 'slide-right'
    | 'zoom';
  scrollable?: boolean;
  backdrop?: string;
  closeOnBackdropClick?: boolean;
  showCloseButton?: boolean;
}

@Component({
  selector: 'app-modal',
  imports: [CommonModule],

  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements AfterViewInit {
  @Input() options!: ModalOptions;
  @Output() close = new EventEmitter<void>();
  @ViewChild('modalDiv') modalDiv!: ElementRef;

  ngAfterViewInit(): void {
    this.applyAnimationEffect();
  }

  // =========================================================================================================
  //                                                 Model Styling
  // =========================================================================================================
  applyAnimationEffect() {
    const modal = this.modalDiv.nativeElement.querySelector('.modal-content');

    if (modal) {
      modal.style.opacity = '0'; // Initial opacity

      switch (this.options.animation) {
        case 'fade':
          modal.style.transform = 'scale(1)';
          break;
        case 'slide-down':
          modal.style.transform = 'translateY(-100%)';
          break;
        case 'slide-up':
          modal.style.transform = 'translateY(100%)';
          break;
        case 'slide-left':
          modal.style.transform = 'translateX(-100%)';
          break;
        case 'slide-right':
          modal.style.transform = 'translateX(100%)';
          break;
        case 'zoom':
          modal.style.transform = 'scale(0.5)';
          break;
      }

      setTimeout(() => {
        modal.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        modal.style.opacity = '1';
        modal.style.transform = this.getFinalTransform();
      }, 10);
    }
  }

  getFinalTransform(): string {
    switch (this.options.animation) {
      case 'fade':
        return 'scale(1)';
      case 'slide-down':
      case 'slide-up':
        return 'translateY(0)';
      case 'slide-left':
      case 'slide-right':
        return 'translateX(0)';
      case 'zoom':
        return 'scale(1)';
      default:
        return 'scale(1)';
    }
  }

  closeModal() {
    const modal = this.modalDiv.nativeElement.querySelector('.modal-content');

    if (modal) {
      modal.style.transition = 'all 0.3s ease';
      modal.style.opacity = '0';
      modal.style.transform = this.getInitialTransform();

      setTimeout(() => {
        this.close.emit();
      }, 300);
    } else {
      this.close.emit();
    }
  }

  getInitialTransform(): string {
    switch (this.options.animation) {
      case 'fade':
        return 'scale(1)';
      case 'slide-down':
        return 'translateY(-100%)';
      case 'slide-up':
        return 'translateY(100%)';
      case 'slide-left':
        return 'translateX(-100%)';
      case 'slide-right':
        return 'translateX(100%)';
      case 'zoom':
        return 'scale(0.5)';
      default:
        return 'scale(1)';
    }
  }

  backdropClick(event: Event) {
    if (this.options.closeOnBackdropClick) {
      this.closeModal();
    }
  }
  // =========================================================================================================
  //                                                 Model Styling
  // =========================================================================================================
}
