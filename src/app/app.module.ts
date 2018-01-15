import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// router
import { appRoutes } from './router/app.router';

// angular material modules
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// redux
import { StoreModule } from '@ngrx/store';
import * as reducers from './redux/reducers';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filtercomponent';
import { CounterReduxComponent } from './components/counter-redux/counter-redux.component';
import { TabComponent } from './components/tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterReduxComponent,
    FilterComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    StoreModule.forRoot(reducers),
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
