import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperSliderComponent } from "../swiper-slider/swiper-slider.component";


@Component({
    selector: 'app-work',
    standalone: true,
    templateUrl: './work.component.html',
    styleUrl: './work.component.css',
    imports: [CommonModule, SwiperSliderComponent]
})
export class WorkComponent {


}
