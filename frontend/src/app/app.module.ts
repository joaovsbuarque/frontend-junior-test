import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { HomeComponent } from "./views/home/home.component";
import { ReposComponent } from "./components/template/repos/repos.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { SidebarComponent } from "./components/template/sidebar/sidebar.component";
import { UserComponent } from "./views/user/user.component";
import { AppRoutingModule } from "./app-routing.module";
import { SearchDirective } from "./directives/search.directive";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ReposComponent,
    UserComponent,
    SearchDirective,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatInputModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
