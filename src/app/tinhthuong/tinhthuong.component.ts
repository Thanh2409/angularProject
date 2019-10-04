import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinhthuong',
  templateUrl: './tinhthuong.component.html',
  styleUrls: ['./tinhthuong.component.css']
})
export class TinhthuongComponent implements OnInit {
  nhanvien ={
    hoten:null,
    luong: Number,
    gioitinh:"nam",
    tuoi:null,
    rate: null,
  }

  dotuoi= [
    {
      tuoi: "duoi 25",
      rate: 0.07
    },
    {
      tuoi: "tu 25 den 40",
      rate: 0.1
    },
    {
      tuoi: "tren 40",
      rate: 0.15
    }
  ]
  
    tongtienthuong: Number = 0;

  tienthuong(){
    if(this.nhanvien.gioitinh== "nu")
      this.tongtienthuong=Math.ceil((+this.nhanvien.rate)*(+this.nhanvien.luong)+200000);
    else
      this.tongtienthuong=(+this.nhanvien.rate)*(+this.nhanvien.luong)
    return this.tongtienthuong
  }


  constructor() {}
 
  ngOnInit() {
  }

}
