import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from './../student-info.service'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    
  studentInfo : any;
  constructor(private _studentService: StudentInfoService) { }

  
  ngOnInit() {
    this.studentInfo = this._studentService.students;
  }
  chooseStudent(studentId) {
    this._studentService.chooseStudent(studentId);
  }

  removeStudent(studentId) {
    let checked  = confirm("Bạn có muốn xóa tên học sinh này");
    if(checked == true) {
      this._studentService.removeStudent(studentId) ;
    }
    else return false;
  }
}