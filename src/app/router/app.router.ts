import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { NgModule } from '@angular/core/src/metadata/ng_module';

import { AppComponent } from '../app.component';
import { FilterComponent } from '../components/filter/filtercomponent';
import { CounterReduxComponent } from '../components/counter-redux/counter-redux.component';
import { TabComponent } from '../components/tab/tab.component';

export const routes: Routes = [
    { path: 'filters', component: FilterComponent },
    { path: 'counter', component: CounterReduxComponent },
    { path: '', component: TabComponent }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
