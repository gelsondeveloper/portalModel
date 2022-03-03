import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SearchImputComponent } from './search-imput/search-imput.component';
import { NavbarDefaultComponent } from './navbar-default/navbar-default.component';
import { NavbarMinfinModelComponent } from './Menus/navbar-minfin-model/navbar-minfin-model.component';
import { FlagListComponent } from './shared/flag-list/flag-list.component';
import { LineGovAngolaComponent } from './shared/line-gov-angola/line-gov-angola.component';
import { MainLineGovComponent } from './shared/main-line-gov/main-line-gov.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    SearchImputComponent,
    NavbarDefaultComponent,
    NavbarMinfinModelComponent,
    FlagListComponent,
    LineGovAngolaComponent,
    MainLineGovComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
