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
import {SidebarModule} from 'primeng/sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongListGeneratorComponent } from './components/song-list-generator/song-list-generator.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { LayoutSidebarComponent } from './layout/layout-sidebar/layout-sidebar.component';
@NgModule({
  declarations: [
    LandingComponent,
    SongsListComponent,
    SongDetailsComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    SongListGeneratorComponent,
    AddSongComponent,
    LayoutSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LandingRouter),
    MatCheckboxModule,
    SidebarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LandingModule { }
