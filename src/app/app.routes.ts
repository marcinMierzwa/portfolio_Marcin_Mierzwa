import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { SkillsComponent } from '../Components/skills/skills.component';
import { ContactComponent } from '../Components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Marcin Mierzwa - Portfolio'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Marcin Mierzwa - About Me'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Marcin Mierzwa - Skills'
  },
  {
    path: 'work',
    loadComponent:() => import('../Components/work/work.component')
    .then(c => c.WorkComponent),
    title: 'Marcin Mierzwa - Work'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Marcin Mierzwa - Contact'
  },

];
