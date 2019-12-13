import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GroupListComponent} from './pages/group/group-list/group-list.component';
import {HomeComponent} from './pages/home/home.component';
import {GroupInfoComponent} from './pages/group/group-info/group-info.component';
import {GroupFormComponent} from './pages/group/group-form/group-form.component';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
