
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';


const routes: Routes = [

   // TODO : add canActivate to all paths or redirector on Component
    { path: '',
       component: LoadingComponent
    },
    { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

    },
    {
       path: 'content',
       loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
    },
    {
      path: 'modify',
      loadChildren: () => import('./modify/modify.module').then(m => m.ModifyModule)
   },
   {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
   }


  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
