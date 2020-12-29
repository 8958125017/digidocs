import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormsModule,FormBuilder, Validators, FormGroup, ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
declare var $;
import { MessageService } from '../messageservice.service';
import * as Chartist from 'chartist';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-landdetail',
  templateUrl: './landdetail.component.html',
  styleUrls: ['./landdetail.component.scss']
})
export class LanddetailComponent implements OnInit {
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
              private activatedRoute:ActivatedRoute,
              private messgage : MessageService) { }

  landId:any;
status:any;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
         this.landId = params['landId'];  
             this.status = params['status'];      
         this.getLandFullDetails(this.landId,this.status);
        });

  }
  res:any;
  landData:any;
  currentOwner:any=[];
  previousOwner:any=[];
  getLandFullDetails(id,status){
  	let postData={
  		"land_uniq_id": id,
	    "status":status
  	}
    debugger
    this.blockUI.start('Loading...');
    this.data.getIssuedLand(postData).subscribe(data=>{
     this.blockUI.stop();
     this.res=data;
     debugger
     if(this.res.statusCode==200){
          this.landData=this.res;
             this.currentOwner=this.landData.data[0].curr_owners;
             this.previousOwner=this.landData.data[0].prev_owners;

     	}   
    })
  }

}
