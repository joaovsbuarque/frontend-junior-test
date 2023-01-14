import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./views/home/home.component";
import { UserService } from "./service/user.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SearchDirective } from "./directives/search.directive";
import { HeaderComponent } from "./components/template/header/header.component";
import { ReposComponent } from "./components/template/repos/repos.component";
import { SidebarComponent } from "./components/template/sidebar/sidebar.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { RepositoriosService } from "./service/repositorios.service";
import { PerfilComponent } from "./views/perfil/perfil.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ReposComponent,
    SearchDirective,
    PerfilComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
  ],
  providers: [UserService, RepositoriosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
