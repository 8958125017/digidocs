import { Injectable } from '@angular/core';
import { ConstantModule} from './constants';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { retry, catchError } from 'rxjs/operators';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { Route, Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiIntegrationService {


  constructor(private http: HttpClient,private constant:ConstantModule) { }
  public baseURL = this.constant.basePath;
 
  signup(data){    
      return this.http.post(this.baseURL+'department/signup',data).pipe(
        retry(3)
      );
  }


  login(data){    
    return this.http.post(this.baseURL+'department/departlogin',data, {
        headers: new HttpHeaders()
            .set('Content-Type', 'application/json'),
        observe: 'response'
    })
    .map(res => {    
      return res;        
    }).pipe(
      retry(3)         
    );
  }  





  Registerland(data){
     return this.http.post(this.baseURL+'department/registerLand',data).pipe(
      retry(3)
    );
  }
   validateLand(data){
    return this.http.post(this.baseURL+'department/validateLand',data).pipe(
      retry(3)
    );
  }
   getIssuedLand(data){
    return this.http.post(this.baseURL+'department/getIssuedLand',data).pipe(
      retry(3)
    );
  }


  getallLandbyStatus(data){
    return this.http.post(this.baseURL+'department/getallLandbyStatus',data).pipe(
      retry(3)
    );
  }

   RegisterCivil(data){
     return this.http.post(this.baseURL+'civil/registerCivil',data).pipe(
      retry(3)
    );
  }
  getallCivilbyType(data){
    return this.http.post(this.baseURL+'civil/getallCivilbyType',data).pipe(
      retry(3)
    );
  }
   validateCivil(data){
    return this.http.post(this.baseURL+'civil/validateCivil',data).pipe(
      retry(3)
    );
  }

    
  getIssuedCertificate(data){
    return this.http.post(this.baseURL+'civil/getIssuedCertificate',data).pipe(
      retry(3)
    );
  }

 }
