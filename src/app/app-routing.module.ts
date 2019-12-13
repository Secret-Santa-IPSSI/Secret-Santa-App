import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GroupListComponent} from './pages/group/group-list/group-list.component';
import {HomeComponent} from './pages/home/home.component';
import {GroupInfoComponent} from './pages/group/group-info/group-info.component';
import {GroupFormComponent} from './pages/group/group-form/group-form.component';
import {PeopleListComponent} from './pages/people/people-list/people-list.component';
import {PeopleFormComponent} from './pages/people/people-form/people-form.component';
import {PeopleInfoComponent} from './pages/people/people-info/people-info.component';
import {GiftListComponent} from './pages/gift/gift-list/gift-list.component';
import {GiftFormComponent} from './pages/gift/gift-form/gift-form.component';
import {GiftInfoComponent} from './pages/gift/gift-info/gift-info.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'groups',
        component: GroupListComponent
    },
    {
        path: 'groups/add',
        component: GroupFormComponent
    },
    {
        path: 'groups/:id',
        component: GroupInfoComponent
    },
    {
        path: 'groups/:id/edit',
        component: GroupFormComponent
    },
    {
        path: 'peoples',
        component: PeopleListComponent
    },
    {
        path: 'peoples/add',
        component: PeopleFormComponent
    },
    {
        path: 'peoples/:id',
        component: PeopleInfoComponent
    },
    {
        path: 'peoples/:id/edit',
        component: PeopleFormComponent
    },
    {
        path: 'peoples/:id/gifts',
        component: GiftListComponent
    },
    {
        path: 'peoples/:idPeople/gifts/add',
        component: GiftFormComponent
    },
    {
        path: 'gifts/:id',
        component: GiftInfoComponent
    },
    {
        path: 'gifts/:idGift/edit',
        component: GiftFormComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
