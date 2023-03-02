import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';


export let BusinessRouter: Routes = [
    {path: '', component: LandingComponent, children: [

    ]},
];
