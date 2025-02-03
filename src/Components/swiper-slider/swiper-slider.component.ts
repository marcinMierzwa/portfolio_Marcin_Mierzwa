import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';

import { SwiperContainer } from 'swiper/element/bundle';
import { DataService, Project } from '../../Services/data.service';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { register as registerSwiperElements } from 'swiper/element/bundle';
registerSwiperElements();

@Component({
  selector: 'app-swiper-slider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiper-slider.component.html',
  styleUrl: './swiper-slider.component.css',
})
export class SwiperSliderComponent implements OnInit {
  data: DataService = inject(DataService);

  projects$ = this.data.getProjects as Observable<Project[]>;

  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('.swiper');

    const swiperOptions: SwiperOptions = {
      effect: 'cube',
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 40,
        shadowScale: 0.8,
      },
      navigation: {
        prevEl: '#prev',
        nextEl: '#next',
      },
      pagination: {
        clickable: true,
      },
    };

    Object.assign(swiperElementConstructor!, swiperOptions);

    this.swiperElement.set(swiperElementConstructor as SwiperContainer);

    this.swiperElement()?.initialize();
  }
}
