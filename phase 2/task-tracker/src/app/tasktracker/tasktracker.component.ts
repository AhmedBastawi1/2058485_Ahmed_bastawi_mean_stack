import { Component, OnInit } from '@angular/core';
import {task} from '../task';
@Component({
  selector: 'app-tasktracker',
  templateUrl: './tasktracker.component.html',
  styleUrls: ['./tasktracker.component.css']
})

export class TasktrackerComponent implements OnInit {
  id:string="";
  username:string="";
  Ftask:string="";
  tasks:Array<task>=new Array();
  constructor() { }
  ngOnInit(): void {
  }
  addtask(idRef:any,usernameRef:any,taskRef:any,dateRef:any){
      let id= idRef.value;
      let username= usernameRef.value;
      let Ftask= taskRef.value;
      let deadline=dateRef.value;
      let emp = new task(id,username,Ftask,deadline);
      this.tasks.push(emp);
  }
}
