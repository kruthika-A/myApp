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
  constructor() { }

  ngOnInit(): void {
  }
  userData(event:any){
    console.log('ssssssshg')
    
  }

}
