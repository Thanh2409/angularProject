import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { StudentInfoService } from './student-info.service'

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DetailstudentComponent } from './detailstudent/detailstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DetailstudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: '', component: StudentComponent},
        {path: 'student', component: StudentComponent},
        {path: 'student/:id', component: DetailstudentComponent},
        {path: '**', redirectTo: '', pathMatch: 'full'}
      ]
    )
  ],
  providers: [StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
