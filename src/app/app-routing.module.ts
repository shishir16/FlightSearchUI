import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlternateSearchComponent } from './alternate-search/alternate-search.component';
import { BasicSearchComponent } from './basic-search/basic-search.component';
//import { SearchresultsComponent } from './searchresults/searchresults.component';


const routes: Routes = [
 {path:"", component:BasicSearchComponent} ,
   {path:"alternativeSearch", component:AlternateSearchComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
