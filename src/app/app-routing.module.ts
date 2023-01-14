import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerfilComponent } from "./views/perfil/perfil.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "perfil", component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
