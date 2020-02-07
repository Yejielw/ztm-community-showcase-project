import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { LoadingComponent } from './loading/loading.component';
import { UpperNavigationComponent } from './upper-navigation/upper-navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    UpperNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MatToolbarModule
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
