import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Character } from './character.model';
import { Scenerio } from './scenerio.model';
import { FantasyWorldComponent } from './fantasy-world/fantasy-world.component';
import { ZohrComponent } from './zohr/zohr.component';
import { ZohrScenerioComponent } from './zohr-scenerio/zohr-scenerio.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fantasy',
    component: FantasyWorldComponent
  },
  {
    path: 'zohr',
    component: ZohrComponent
  },
  {
    path: 'zohr/:eventId',
    component: ZohrScenerioComponent 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
