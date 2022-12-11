import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { XPANDComponent } from './xpand/xpand.component';

const routes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'xpand', component: XPANDComponent,data:{id:0} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
