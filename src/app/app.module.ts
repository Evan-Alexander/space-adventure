import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FantasyWorldComponent } from './fantasy-world/fantasy-world.component';
import { ZohrComponent } from './zohr/zohr.component';
import { ZohrScenerioComponent } from './zohr-scenerio/zohr-scenerio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FantasyWorldComponent,
    ZohrComponent,
    ZohrScenerioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
