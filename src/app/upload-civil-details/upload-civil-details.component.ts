import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalConstant } from '../globalconstant';
import { FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CustomValidators } from '../validators';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
declare var $;
import { MessageService } from '../messageservice.service';

@Component({
  selector: 'app-upload-civil-details',
  templateUrl: './upload-civil-details.component.html',
  styleUrls: ['./upload-civil-details.component.scss']
})
export class UploadCivilDetailsComponent implements OnInit {
 @BlockUI() blockUI: NgBlockUI;
clearSetTimeout:any;
pendingRequest:any;
signupForm:FormGroup;
public isSignupValidFormSubmitted = null;
creds:any;
submitted = false;
previous:any;
prev:any;
civiladetails: FormGroup;
bodyRes: any;
response: any;
instituteDetails:any;
chaninAddress:any;
public isFileUploaded = null;


constructor(
private data:ApiIntegrationService,
private formBuilder: FormBuilder,
private toastr: ToastrService,
private fb: FormBuilder,
private router:Router,
public constants:GlobalConstant,
public loader: Ng4LoadingSpinnerService,
private activatedRoute:ActivatedRoute,
private messgage : MessageService) {
  this.docDetails = localStorage.getItem('dgdocDetails');
  this.pubBlockaddr = JSON.parse(this.docDetails).data.pubBlockaddr;
}
docDetails:any;
pubBlockaddr:any
singleUpload: boolean = true;
bulkUpload: boolean = false;
public studentForm: FormGroup;
fileName:any;
docFile:any;
postData:any;
onSubmit() {  
  this.submitted = true;
  this.postData = new FormData();
  this.postData.append('opsType', 'civil');
  this.postData.append('opsMode', 'issuer');
  this.postData.append('pubBlockaddr', this.pubBlockaddr);
  this.postData.append('owners', JSON.stringify(this.civiladetails.value));
  this.postData.append('certifId', '121313');
  this.postData.append('doc',this.file , this.fileName);
  this.postData.append('data', JSON.stringify(this.civiladetails.value));
  this.postData.append('certifType', this.civiladetails.value.certiType);
   this.blockUI.start('Loading...');
   this.data.RegisterCivil(this.postData)
     .subscribe(
       data => {
          this.blockUI.stop();
        if(data['statusCode'] == 200){
          this.toastr.success(data['message']);
             this.router.navigate(['/my-document']);
           }               
       else if(data['statusCode'] == 400){
        this.toastr.error('you someting is missing', 'Please checked!',
        {timeOut: 2000});
     }      
     }, err => {
       console.log(err);
     })
 }

file:any;
 fileUpload(event){   
    let reader = new FileReader();
    this.file = event.target.files[0];  
   if(this.file){
       this.fileName = this.file.name;
     
    }else{
       this.toastr.error('Please Upload Doc File');
      return false;
    }
}




ngOnInit() {  
this.civiladetails = this.formBuilder.group({
  name: ['', Validators.required],
  father_name: ['', [Validators.required]],
  mother_name: ['', Validators.required],
  govt_id: ['', [Validators.required]],
  mob_num: ['', Validators.required],
  curr_add: ['', [Validators.required]], 
  // productSku: ['', [Validators.required]],
  state: ['', [Validators.required]],
  country: ['', Validators.required],
  postal_code: ['', [Validators.required]], 
  certifId: [''],
  email: ['', [Validators.required]],
  certiType:['', [Validators.required]],

});
}

}