import { Routes } from '@angular/router';
import { AddSongComponent } from './components/add-song/add-song.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { SongListGeneratorComponent } from './components/song-list-generator/song-list-generator.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { LandingComponent } from './landing.component';


export let LandingRouter: Routes = [
    {path: '', component: LandingComponent, children: [
        {path: '', component: SongsListComponent},
        {path: 'generate', component: SongListGeneratorComponent},
        {path: 'song/:id', component: SongDetailsComponent},
        {path: 'song/add', component: AddSongComponent},
        {path: 'song/edit/:id', component: SongDetailsComponent},
    ]},
];
