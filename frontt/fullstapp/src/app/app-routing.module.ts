import { TypeFormComponent } from './type-form/type-form.component';
import { UserformComponent } from './userform/userform.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { TypelistComponent } from './typelist/typelist.component';

const routes: Routes = [
 { path: 'users', component: UserlistComponent},
 { path: 'types', component: TypelistComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'userform', component: UserformComponent},
  {path: 'typeform', component: TypeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
