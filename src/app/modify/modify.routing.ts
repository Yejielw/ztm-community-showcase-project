import { AddShowcaseComponent } from './add-showcase/add-showcase.component';
import { EditShowcaseComponent } from './edit-showcase/edit-showcase.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'edit', component: EditShowcaseComponent },
    { path: 'add', component: AddShowcaseComponent },
]
//TODO: add route for edit for specific item and pass Id to component
