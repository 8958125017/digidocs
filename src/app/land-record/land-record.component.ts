import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-land-record',
  templateUrl: './land-record.component.html',
  styleUrls: ['./land-record.component.scss']
})
export class LandRecordComponent implements OnInit {
   @BlockUI() blockUI: NgBlockUI; 
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
      if(this.authType == "Issuer"){
         this.myLandRecord = true;
      }
      else{
           this.myLandRecord = false;
           this.validatingAuthority = true;
          }
          this.getLandRecord();
  }

 issuerList:any=[];
 validatorList:any=[];
  getLandRecord(){      
   debugger
   this.blockUI.start('Loading...');
    this.data.getallLandbyStatus({"status": ''}).subscribe(data=>{
       this.blockUI.stop();
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
    debugger
   this.item=item;
  }

resp:any;
  approveLandRecord(){
    let postData={
      "land_uniq_id": this.item.land_uniq_id,
      "pubBlockaddr":JSON.parse(this.docDetails).data.pubBlockaddr,
      "curr_owners": this.item.curr_owners[0],
      "parent_land_id": this.item.parent_land_id,
      "status":"validated"
    }
    this.data.validateLand(postData).subscribe(data=>{
      this.resp=data;
        if(this.res.statusCode==200){
          this.getLandRecord();
            this.toastr.success("validate success full");
        }else{
            this.toastr.success("server error");
        }
    })
  }


  reject(){
   this.toastr.success("successfully");
}

}
