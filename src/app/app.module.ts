import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { StudentInfoService } from './student-info.service'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DetailstudentComponent } from './detailstudent/detailstudent.component';
import { FormComponent } from './form/form.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { TinhthuongComponent } from './tinhthuong/tinhthuong.component';
import { TinhthuongcheckComponent } from './tinhthuongcheck/tinhthuongcheck.component';
import { GiaikhatComponent } from './giaikhat/giaikhat.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DetailstudentComponent,
    FormComponent,
    SinhvienComponent,
    TinhthuongComponent,
    TinhthuongcheckComponent,
    GiaikhatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: StudentComponent},
        {path: 'student', component: StudentComponent},
        {path: 'form', component: FormComponent},
        {path: 'sinhvien', component: SinhvienComponent},
        {path: 'tinhthuong', component: TinhthuongComponent},
        {path: 'giaikhat', component: GiaikhatComponent},
        {path: 'tinhthuongcheck', component: TinhthuongcheckComponent},
        {path: 'student/:id', component: DetailstudentComponent},
        {path: '**', redirectTo: '', pathMatch: 'full'}
      ]
    )
  ],
  providers: [StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
