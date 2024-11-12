import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { S1 } from "./pages/S/S.component";
const routes: Routes = [
  {
    path: "",
    component: S1,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}