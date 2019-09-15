import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from './../student-info.service'

@Component({
  selector: 'app-detailstudent',
  templateUrl: './detailstudent.component.html',
  styleUrls: ['./detailstudent.component.css']
})
export class DetailstudentComponent implements OnInit {

  studentDetailInfo : any;
  studentDetailReleInfo : any;
  constructor(private _studentService: StudentInfoService) { }

  ngOnInit() {
    this.studentDetailInfo = this._studentService.getStudentChoosen();
    this.studentDetailReleInfo = this._studentService.filterInfoStudent();
    this._studentService.refreshStoredArray();
  }
  

}
