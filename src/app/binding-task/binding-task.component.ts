import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-task',
  templateUrl: './binding-task.component.html',
  styleUrls: ['./binding-task.component.scss']
})
export class BindingTaskComponent implements OnInit {
  userName:string=''
  isDisable:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  clearData(){
    this.userName=''
  }
  disabled(event:any){
    console.log('event',event.target.value);
    if(event.target.value){
      this.isDisable=false
      return
    }
    this.isDisable=true
   
  }
  
}
