import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  hcn = {
  cd:null,
  cr:null,
  cv:null,
  dt:null}
  
  ngOnInit() {
  }
  tinh(){
    this.hcn.dt=this.hcn.cd*this.hcn.cr;
    this.hcn.cv=(this.hcn.cr+this.hcn.cd)*2;
  }
}
