import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {GroupListComponent} from './pages/group/group-list/group-list.component';
import {HomeComponent} from './pages/home/home.component';
import {GroupInfoComponent} from './pages/group/group-info/group-info.component';
import {GroupFormComponent} from './pages/group/group-form/group-form.component';
import {PeopleListComponent} from './pages/people/people-list/people-list.component';
import {PeopleInfoComponent} from './pages/people/people-info/people-info.component';
import {PeopleFormComponent} from './pages/people/people-form/people-form.component';
import {GiftFormComponent} from './pages/gift/gift-form/gift-form.component';
import {GiftInfoComponent} from './pages/gift/gift-info/gift-info.component';
import {GiftListComponent} from './pages/gift/gift-list/gift-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        GroupListComponent,
        HomeComponent,
        GroupInfoComponent,
        GroupFormComponent,
        PeopleListComponent,
        PeopleInfoComponent,
        PeopleFormComponent,
        GiftListComponent,
        GiftInfoComponent,
        GiftFormComponent,
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
export class AppModule {
}
