import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
username:string=''
userEmail:string=''
Password:string=''
isDisable:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  userData(event:any){
    console.log('ssssssshg')
    
  }
  disableBtn(){
    this.isDisable=true
  }
}
