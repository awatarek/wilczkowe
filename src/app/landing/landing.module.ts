import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';



@NgModule({
  declarations: [
    LandingComponent,
    SongsListComponent,
    SongDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
