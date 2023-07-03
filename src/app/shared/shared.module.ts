import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/header/header.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { HeroFeatureComponent } from '../components/hero-section/hero-feature/hero-feature.component';
import { ButtonComponent } from '../components/button/button.component';
import { ImageShowcaseComponent } from '../components/image-showcase/image-showcase.component';
import { AppShowcaseComponent } from '../components/app-showcase/app-showcase.component';
import { TestamentComponent } from '../components/testament/testament.component';
import { FooterComponent } from '../components/footer/footer.component';


const COMPONENT = [
  AppHeaderComponent,
  HeroSectionComponent,
  HeroFeatureComponent,
  ButtonComponent,
  ImageShowcaseComponent,
  AppShowcaseComponent,
  TestamentComponent,
  FooterComponent
];



@NgModule({
  declarations: [
    COMPONENT
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENT
  ]
})
export class SharedModule { }
