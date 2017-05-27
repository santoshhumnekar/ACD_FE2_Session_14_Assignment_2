import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService{

  private _url : string = "https://jsonplaceholder.typicode.com/posts";
  constructor( private _http : Http) { }

  getData(){
    /*return this._http.get(this._url)
    .map((res:Response) => res.json()); */
    return this._http.get(this._url)
               .toPromise()
               .then(res => this.extractData(res));
  }

  extractData(res: Response){
    var data = res.json();
    return data;
  }

}
