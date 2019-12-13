import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroupListComponent } from './pages/group/group-list/group-list.component';
import { HomeComponent } from './pages/home/home.component';
import { GroupInfoComponent } from './pages/group/group-info/group-info.component';
import { GroupFormComponent } from './pages/group/group-form/group-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GroupListComponent,
    HomeComponent,
    GroupInfoComponent,
    GroupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
