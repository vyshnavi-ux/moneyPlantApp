import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertProfilePageComponent } from './expert-profile-page/expert-profile-page.component';

const routes: Routes = [
  {
    path:"expertProfile",
    component:ExpertProfilePageComponent
  },
  {
    path:'',
    redirectTo:'expertProfile',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
