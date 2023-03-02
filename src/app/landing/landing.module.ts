import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { RouterModule } from '@angular/router';
import { LandingRouter } from './landing-routing.router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LandingComponent,
    SongsListComponent,
    SongDetailsComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRouter),
    MatCheckboxModule
  ]
})
export class LandingModule { }
