import { Routes } from '@angular/router';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { SongListGeneratorComponent } from './components/song-list-generator/song-list-generator.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { LandingComponent } from './landing.component';


export let LandingRouter: Routes = [
    {path: '', component: LandingComponent, children: [
        {path: '', component: SongsListComponent},
        {path: 'generate', component: SongListGeneratorComponent},
        {path: 'song/:id', component: SongDetailsComponent}
    ]},
];
