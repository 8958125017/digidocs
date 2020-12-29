import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConstantModule {
  	//******* TEST ******//
 //public host = 'localhost';
   public host = '49.50.67.44';
   public port = '2018';
   public basePath = 'http://'+this.host+':'+this.port+'/';

}