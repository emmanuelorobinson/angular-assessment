import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  // link the showModal property from HomeComponent to the showModal property in HeroSectionComponent
  // define showModal
  @Output() openModal = new EventEmitter<void>();

  onOpenModal() {
    this.openModal.emit();
  }


  featureLists = [
    {
      src: 'assets/images/c1.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
    },
    {
      src: 'assets/images/c2.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
    },
    {
      src: 'assets/images/c3.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
    },
    {
      src: 'assets/images/c4.png',
      title: 'Lorem ipsum dolor sit amet',
      description: 'Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh.'
    }
  ];
}
