import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //userData = [];
  userData : Promise<any[]>;
  
  constructor(private _data : DataService) {}

  ngOnInit(){

    /*this._data.getData()
    .subscribe(res => this.userData = res);*/

    this.userData = this._data.getData();

  }

}
