import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {

  constructor() { }

  sinhvien={
    hoten: null,
    ngaysinh: null,
    gioitinh: null,
    diem: 0,
    hocluc: "rot",
  }
  ngOnInit() {
  }
  grade(){
    if(this.sinhvien.diem>=5)
      this.sinhvien.hocluc="dau";
    else
      this.sinhvien.hocluc="rot";
  }
}
