import { InMemoryShowcasesService } from './services/showcases/in-memory-showcases.service';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { LoadingComponent } from './loading/loading.component';
import { UpperNavigationComponent } from './upper-navigation/upper-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ExpandableButtonComponent } from './upper-navigation/expandable-button/expandable-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    UpperNavigationComponent,
    ExpandableButtonComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    //!environment.production ?
    HttpClientInMemoryWebApiModule.forRoot(InMemoryShowcasesService, {
      delay: 100
    })
    // : []
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
