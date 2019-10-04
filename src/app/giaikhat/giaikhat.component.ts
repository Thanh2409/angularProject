import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giaikhat',
  templateUrl: './giaikhat.component.html',
  styleUrls: ['./giaikhat.component.css']
})
export class GiaikhatComponent implements OnInit {

  dulieu =[
    {
      name: "Tiger",
      dongia: 13000,
      disable: true,
      soluong: null,
      thanhtien: 0
      
    },
    {
      name: "Heineken",
      dongia: 16000,
      disable: true,
      soluong: null,
      thanhtien:0 
  
      
    },
    {
      name: "SaiGon",
      dongia: 10000,
      disable: true,
      soluong: null,
      thanhtien: 0
 
      
    }
  ]
  
  

  tinhtien(name: string){
    this.dulieu.forEach(element => {
      if(element.name==name)
        element.thanhtien=element.dongia*element.soluong
    });
  }

  tongtien(){
    let total= 0
    this.dulieu.forEach(element => {
      total+=element.thanhtien
    });
    return total
  }

  disable(name :string){
    this.dulieu.forEach(element => {
      if(element.name==name)
        element.disable=!element.disable;
    });
  }
 
  constructor() { }

  ngOnInit() {
  }

}
