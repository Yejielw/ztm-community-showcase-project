import { Routes } from '@angular/router';
import { ShowcasesComponent } from './showcases/showcases.component';
import { LikedShowcasesComponent } from './liked-showcases/liked-showcases.component';

export const routes: Routes = [
  { path: '', component: ShowcasesComponent },
  { path: 'showcases', component: ShowcasesComponent },
  { path: 'liked-showcases', component: LikedShowcasesComponent },
]

//TODO: showcases and liked-showcases should point to same component
// and pass it differnt parametets (isLiked=true/false)
// then remove LikedShowcasesComponent



