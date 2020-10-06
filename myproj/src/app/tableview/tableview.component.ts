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

  constructor(private ser: TableserviceService) { }

  data: object;
  idvalue: any;
  tableData: any;
  subscription: any;
  refreshData: any;

  ngOnInit() {
    this.getUserDetails();
  }
  getUserDetails() {
        this.subscription = timer(0, 10000)
        .pipe(switchMap(() => this.ser.getdata()))
        .subscribe(resp =>
           {
             console.log(resp)
             this.refreshData = resp
             this.refreshData = this.refreshData.hits         
           });
  }
  getTableData(t) {
       this.titlevalue = t.title;
       this.url = t.url;
       this.createdat = t.created_at;
       this.author = t.author;
       this.tableData = t
  }
}