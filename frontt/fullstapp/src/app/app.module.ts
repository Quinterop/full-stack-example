import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TypelistComponent } from './typelist/typelist.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeFormComponent } from './type-form/type-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    UserlistComponent,
    TypelistComponent,
    TypeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
