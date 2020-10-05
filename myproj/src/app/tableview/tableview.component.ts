import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent implements OnInit {
  titlevalue: any;
  url: any;
  createdat: any;
  author: any;

  constructor(private ser:TableserviceService) { }

data:object;
idvalue:any;
na:any;
emai:any;
subscription:any;
data1:any;
  
  ngOnInit() {
   this.getemployee();
  }
getemployee(){
  this.subscription=timer(0,10000).pipe(
    switchMap(()=> this.ser.getdata())
    ).subscribe(resp=>{console.log(resp)
    this.data1=resp
    this.data1=this.data1.hits}); 
  console.log("renjkn",this.data)

}
func(t){
  this.titlevalue=t.title;
  this.url=t.url;
  this.createdat=t.created_at;
  this.author=t.author;
  this.na=t
}


  
}