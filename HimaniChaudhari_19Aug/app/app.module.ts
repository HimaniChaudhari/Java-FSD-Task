import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'employee', component: EmployeeComponent},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
