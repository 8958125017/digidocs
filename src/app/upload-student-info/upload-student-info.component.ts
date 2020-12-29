import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstant } from '../globalconstant';
import {FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';

@Component({
selector: 'app-upload-student-info',
templateUrl: './upload-student-info.component.html',
styleUrls: ['./upload-student-info.component.scss']
})
export class UploadStudentInfoComponent implements OnInit { @BlockUI() blockUI: NgBlockUI;
clearSetTimeout:any;
pendingRequest:any;
signupForm:FormGroup;
public isSignupValidFormSubmitted = null;
creds:any;
submitted = false;
previous:any;
prev:any;
registerForm: FormGroup;
bodyRes: any;
response: any;
instituteDetails:any;
chaninAddress:any;
public isFileUploaded = null;
fileName:any;
preOwner:any;
public docArray:any = [
	                        {
	                            "name"  :"",
	                            "father_name":"",
								"mother_name":"",
								"govt_id":"",
								"mob_num":"",
								"curr_add":"",
								"country":"",
								"state":"",
								"postal_code":"",
								"email":""
							}
                        ]
 public preArray:any = [] ;
 docDetails:any;
 pubBlockaddr:any;
constructor(
			private data:ApiIntegrationService,
			private formBuilder: FormBuilder,
			private toastr: ToastrService,
			private fb: FormBuilder,
			private router:Router,
			public constants:GlobalConstant,
			public loader: Ng4LoadingSpinnerService,
			private activatedRoute:ActivatedRoute,
			private messgage : MessageService)
 {

 	this.docDetails = localStorage.getItem('dgdocDetails');
    this.pubBlockaddr = JSON.parse(this.docDetails).data.pubBlockaddr;

		this.signupForm = this.fb.group({
			landAddress:new FormControl(''),
			postalCode:new FormControl(''),
			country:new FormControl(''),
			state:new FormControl(''),
			geoCoords:new FormControl(''),
			landArea:new FormControl(''),
			parentLand:new FormControl(''),
			plotMap:new FormControl(''),
			regPaper:new FormControl(''),
			stampPaper:new FormControl(''),
			currentOwner: this.fb.array([]),
			previousOwner: this.fb.array([]),
		});	
}

singleUpload: boolean = true;
bulkUpload: boolean = false;
public studentForm: FormGroup;


studentInfo(value) {
	if (value == "singleUpload") {
		this.singleUpload = true;
		this.bulkUpload = false;
	}
	else {
		this.singleUpload = false;
		this.bulkUpload = true;
	}
}

file:any;
plotPaper:any;
stampPaper:any;
regPaper:any;

ploatName:any
stampName:any;
regName:any;

bluePrint:any
bluePrintName:any
fileUpload(event,item){
		let reader = new FileReader();
	this.file = event.target.files[0];	
    debugger
	if(this.file){
      if(item=="plot"){
       		this.plotPaper =this.file;
       		this.ploatName=this.file.name;
      }else if(item=="reg"){
      	    this.stampPaper=this.file;
          	this.stampName = this.file.name;
      }else if(item=="stamp"){
      	     this.regPaper=this.file;
         	this.regName = this.file.name;
      }else{
      	    this.bluePrint=this.file;
         	this.bluePrintName = this.file.name;
      }
	}else{
		this.toastr.error('Please Upload Doc File');
		return false;
	}	
}

removePreviousOwner(i:number){
	if(i){
	this.previous.removeAt(i);
  }
}


removeCuurentOwner(i:number) {
	if(i){
    	this.creds.removeAt(i);
	}
}


uploadStudentFormInit(){
		this.studentForm = this.fb.group({		
			land_add: new FormControl(''),
			postal_code: new FormControl(''),
			country: new FormControl(''),
			state: new FormControl(''),	
			geo_indecies:new FormControl(''),
			land_area: new FormControl(''),
			parent_land_id:new FormControl(''),
			 land_uniq_id:new FormControl(''),
			// reg_paper:new FormControl(''),
			// stamp_paper:new FormControl(''),

		});
}

postData:any;

//-----------------Student Form start here--------------------//
submitLandRecord() {	
if (this.studentForm) {
		this.postData = new FormData();
		this.postData.append('curr_owners',JSON.stringify(this.docArray) );
		this.postData.append('land_add', this.studentForm.value.land_add);
		this.postData.append('postal_code',this.studentForm.value.postal_code);
		this.postData.append('country', this.studentForm.value.country);
	    this.postData.append('state', this.studentForm.value.state);		
		this.postData.append('geo_indecies', this.studentForm.value.geo_indecies);
		this.postData.append('land_area', this.studentForm.value.land_area);
		this.postData.append('parent_land_id', this.studentForm.value.parent_land_id);
		this.postData.append('plot_map', this.plotPaper ,this.ploatName);
		this.postData.append('stamp_paper', this.stampPaper, this.stampName);
		this.postData.append('reg_paper', this.regPaper ,this.regName );
		this.postData.append('blue_print', this.bluePrint ,this.bluePrintName );
        this.postData.append('prev_owners', JSON.stringify(this.preArray));
        this.postData.append('opsType',  'land');
        this.postData.append('opsMode',  'Issuer');
        this.postData.append('pubBlockaddr',this.pubBlockaddr);
        this.postData.append('status',  'validated');
        this.postData.append('land_uniq_id',  this.studentForm.value.land_uniq_id);
        this.postData.append('auth_by',  'land');
		clearTimeout(this.clearSetTimeout);
		this.blockUI.start();
		this.pendingRequest=this.data.Registerland(this.postData).subscribe((data) => {
				debugger
				clearTimeout(this.clearSetTimeout);
				this.blockUI.stop();
				this.isSignupValidFormSubmitted = false;
		if (data['statusCode'] == 200) {		        
				this.toastr.success(data['message']);
				this.studentForm.reset();
				this.router.navigate(['/land-record']);
		}
		}, error => {
			this.blockUI.stop();
			clearTimeout(this.clearSetTimeout);
			this.toastr.error('Not able to connect host, please try again');
		})
			this.clearSetTimeout = setTimeout(() => {
			//this.pendingRequest.unsubscribe();
			this.blockUI.stop();
		}, 30000);
		}else{
			this.isSignupValidFormSubmitted = false;
			this.toastr.error('something went wrong');
		}

}


ngOnInit() {
this.uploadStudentFormInit();
}

      docRes:any;
      errorName:boolean = false;
      errorDoc:boolean = false;

      addMore(i:any){    
      if(!this.docArray[i].govt_id) {
      	this.toastr.error('please enter govt id');
      	return false;
      } else{
                	this.docArray.push({
	                            "name"  :"",
	                            "father_name":"",
								"mother_name":"",
								"govt_id":"",
								"mob_num":"",
								"curr_add":"",
								"country":"",
								"state":"",
								"postal_code":"",
								"email":""
							})    
      }
           
	 
      }

      remove(i){
      	if(i){
      		 this.docArray.splice(i, 1);
      		}       
      }

     addPreviousOwner(){  
          this.preArray.push(this.preOwner); 
          this.preOwner="";
      }

    removePre(i){
         	debugger
	      	if(i){
	      		 this.preArray.splice(i, 1);
	        }       
    }


}