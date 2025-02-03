import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ActiveLink, DataService } from '../../Services/data.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class NavigationComponent implements OnInit {

  dataService: DataService = inject(DataService);
  isMobileView: boolean = false;
  isActiveLinkOnInit: boolean = false;
  activeLinks!: ActiveLink[];

  ngOnInit(): void {
    this.dataService.getActiveLinks.subscribe(
      (values: ActiveLink[]) => (this.activeLinks = values)
    );
  }

  toggleMobileView() {
    this.isMobileView = !this.isMobileView;
  }

  onRouterLinkActive(isActive: boolean): void {
    this.isActiveLinkOnInit = isActive;
  }

  getLinkName(event: Event): void {
    let linkName = (
      event.target as HTMLLinkElement
    ).textContent?.toLocaleLowerCase();
    this.activeLinks.forEach((item: ActiveLink, index) => {
      if (item.linkName === linkName) {
        this.activeLinks[index].isActiveLink = true;
      } else {
        this.activeLinks[index].isActiveLink = false;
      }
    });
  }
}
