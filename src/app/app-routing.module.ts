import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnderstandingAngularModule} from "./modules/understanding-angular/understanding-angular.module";

const routes: Routes = [
  {path: "understanding-angular", loadChildren: ()=> UnderstandingAngularModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
