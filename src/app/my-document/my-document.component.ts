import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { ToastrService } from 'ngx-toastr';
import { MessageService } from '../messageservice.service';
import { ApiIntegrationService } from '../api-integration.service';
@Component({
  selector: 'app-my-document',
  templateUrl: './my-document.component.html',
  styleUrls: ['./my-document.component.scss']
})
export class MyDocumentComponent implements OnInit {
  docDetails:any;
  authType:any;
  myLandRecord:boolean = false;
  validatingAuthority:boolean = false;
  res:any;
  remarks:any;
  constructor(
     private data: ApiIntegrationService,
     private fb: FormBuilder,
     private router: Router,
     public constants: GlobalConstant,
     public loader: Ng4LoadingSpinnerService,
     private activatedRoute: ActivatedRoute,
     private messgage: MessageService,
      private toastr: ToastrService,
  ) {    
      this.docDetails = localStorage.getItem('dgdocDetails');
      this.authType = JSON.parse(this.docDetails).data.opsMode;
      debugger
      if(this.authType == "Issuer"){
         this.myLandRecord = true;
      }
      else{
           this.myLandRecord = false;
           this.validatingAuthority = true;
          }         
          this.getcivilRecord();
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

   ngOnInit() {    
   }

item:any;
  approve(item){
   this.item=item;
  }

resp:any;
  approvecivilRecord(){  
   
    let postData= {
      "certifId":this.item.certifId,
      "pubBlockaddr":this.item.pubBlockaddr,
      "owner":this.item.owner_id,
      "certifType":this.item.certifType,
      "status": "validated"
    }
    
    this.data.validateCivil(postData).subscribe(data=>{
      this.resp=data;
      
        if(this.res.statusCode==200){
          this.getcivilRecord();
            this.toastr.success("certificate validate successfully");
        }else{
            this.toastr.success("server error");
        }
    })
  }


reject(){
   this.toastr.success("reject successfully");
}

}
