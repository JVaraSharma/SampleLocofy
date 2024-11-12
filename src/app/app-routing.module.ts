import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { S } from "./pages/S/S.component";
const routes: Routes = [
  {
    path: "",
    component: S,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
