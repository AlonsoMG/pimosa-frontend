import { MachineryDashboardComponent } from './machinery-dashboard/machinery-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/management/machinery',
    pathMatch: 'full'
  },
  {
    path: 'management/machinery',
    component: MachineryDashboardComponent
  },
  {
    path: '**',
    redirectTo: '/management/machinery',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
