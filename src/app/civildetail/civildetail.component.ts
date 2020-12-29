import { Component, OnInit} from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute} from  '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';

@Component({
  selector: 'app-civildetail',
  templateUrl: './civildetail.component.html',
  styleUrls: ['./civildetail.component.scss']
})
export class CivildetailComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  docDetails:any;
  chaninAddress:any;
  landRecord:boolean = false;
  civilCertificate:boolean = false;
  opsMode:any;
  showformButton:boolean;
  constructor(   
              private data:ApiIntegrationService,
              private toastr: ToastrService,
              private fb: FormBuilder,
              private router:Router,
              public  constants:GlobalConstant, 
              public  loader: Ng4LoadingSpinnerService,
              private activatedRoute:ActivatedRoute,
              private messgage : MessageService
            ) { }

  certiId:any;
  status:any;
  cerType:any
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
         this.certiId = params['certiId']; 
         this.status   = params['status'];  
         this.cerType  = params['certifType']; 
         this.getcertificateFullDetails(this.certiId,this.status, this.cerType );
        });

  }
  res:any;
  certiData:any={};
  ownData:any;
  getcertificateFullDetails(id,status,cerType){
  	let postData={
		  		"certifId": id,
			    "status":status,
			    "certifType":cerType
			}
    this.blockUI.start();
    this.data.getIssuedCertificate(postData).subscribe(data=>{
     this.res=data;
     this.blockUI.stop();
     debugger
     if(this.res.statusCode==200){
     	 this.certiData=this.res;
        this.ownData=JSON.parse(this.res.data[0].data)
     	}   
    })
  }

}
