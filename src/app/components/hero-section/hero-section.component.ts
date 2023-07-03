import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
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
