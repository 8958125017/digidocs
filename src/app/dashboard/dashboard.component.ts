import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';
import * as Chartist from 'chartist';

import { ApiIntegrationService } from '../api-integration.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  docDetails:any;
  chaninAddress:any;
  landRecord:boolean = false;
  civilCertificate:boolean = false;
  opsMode:any;
  showformButton:boolean;
  
  constructor(
      private fb: FormBuilder, private data: ApiIntegrationService,
      private router: Router,
      public constants: GlobalConstant,
      public loader: Ng4LoadingSpinnerService,
      private activatedRoute: ActivatedRoute,
      private messgage: MessageService
  ) {
    this.docDetails = localStorage.getItem('dgdocDetails');
    this.chaninAddress = JSON.parse(this.docDetails).data.opsType;
    this.opsMode=JSON.parse(this.docDetails).data.opsMode;
    if(this.opsMode=="Issuer"){
      this.showformButton=true;
    }else{
      this.showformButton=false;
    }
    debugger
    if(this.chaninAddress == "land"){
       this.landRecord = true;
       this.getLandRecord();
    }
    else{
      this.civilCertificate = true;
      this.landRecord = false;
      this.getcivilRecord();
    }
   }

 
 issuerList:any=[];
  validatorList:any=[];
getcivilRecord(){      
    let postData={
      "status": "",
      "certifType": "birth"
    }
    this.data.getallCivilbyType(postData).subscribe(data=>{
      this.res=data;
      debugger
      this.issuerList=[];
      this.validatorList=[];
       if(this.res.statusCode==200){
         if(this.authType == "Issuer"){    
                 this.validatorList=[];       
                 this.issuerList=this.res.data;
            }
            else{        
                  this.issuerList=[];         
                  this.validatorList=this.res.data;
                }
        
       }else{
          
       }
    })
  }
res:any;
authType:any;
  getLandRecord(){      
   debugger
    this.data.getallLandbyStatus({"status": ''}).subscribe(data=>{

      this.res=data;
      debugger
      this.issuerList=[];
      this.validatorList=[];
       if(this.res.statusCode==200){
         if(this.authType == "Issuer"){    
                 this.validatorList=[];       
                 this.issuerList=this.res.data;
            }
            else{        
                  this.issuerList=[];         
                  this.validatorList=this.res.data;
                }
        
       }else{
          
       }
    })
  }
  ngOnInit() {

}
}
