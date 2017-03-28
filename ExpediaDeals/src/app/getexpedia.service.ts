import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetexpediaService {

  constructor(private http:Http) { }
  Getdata(){
  	 
  	 return this.http.get('/api/expedia').map(res=>res.json())
  }
}
