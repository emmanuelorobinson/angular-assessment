import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-feature',
  templateUrl: './hero-feature.component.html',
  styleUrls: ['./hero-feature.component.scss']
})
export class HeroFeatureComponent {
  // receive data from parent component
  @Input() featureItem: any;
  

}
