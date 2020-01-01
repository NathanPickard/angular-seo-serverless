import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: '/firstComponent', pathMatch: 'full' },
    { path: 'firstComponent', component: FirstComponent },
    { path: 'secondComponent', component: SecondComponent }
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
