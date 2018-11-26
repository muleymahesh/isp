import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  formgroup:FormGroup;
  firstname:AbstractControl;
  lastname:AbstractControl;
  address:AbstractControl;
  mobile_no:AbstractControl;
  email:AbstractControl;
  password:AbstractControl;
  confirm_password:AbstractControl;

  validation_msg:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
    this.validation_msg={
      'firstname':[
        { type:'required', message:'Enter the first name.'},
        { type:'pattern', message:'Please enter the correct first name.'}
      ],
      'lastname':[
        { type:'required', message:'Enter the last name.'},
        { type:'pattern', message:'Please enter the correct last name.'}
      ],
      'address':[
        { type:'required', message:'Enter the address.'}
      ],
      'mobile_no':[
        { type:'required', message:'Enter the phone number.'},
        { type:'maxlength', message:'Enetr 10 digit number.'},
        { type:'minlength', message:'Enetr 10 digit number.'},
        { type:'pattern', message:'Phone number must be in digit.'},
     ],
      'email':[
       { type:'required', message:'Enter the email id.'},
       { type:'pattern', message:'Please enter the correct email or valid email.'}
     ],
     'password':[
       { type:'required', message:'Enter the password'},
       { type:'pattern', message:'Password Must Contain(4-20) 1-char! 1-number!.'}
     ],
     'confirm_password':[
       { type:'required', message:'Enter the confirm password password'},
       { type:'pattern', message:'Password Must Contain(4-20) 1-char! 1-number!'}
     ]
    }
   
    this.formgroup = formbuilder.group({
        firstname:['',Validators.compose([Validators.required,Validators.pattern("^[a-z0-9_-]{2,15}$")])],
        lastname:['',Validators.compose([Validators.required,Validators.pattern("^[a-z0-9_-]{2,15}$")])],
        address:['',Validators.required],
        mobile_no:['',Validators.compose([Validators.maxLength(10),Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10)])],
        email:['',Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")])],
        password:['',Validators.compose([Validators.required,Validators.pattern("((?=.*\d)(?=.*[a-zA-Z]).{4,20})")])],  
        confirm_password:['',Validators.compose([Validators.required,Validators.pattern("((?=.*\d)(?=.*[a-zA-Z]).{4,20})")])]
      });

      this.firstname = this.formgroup.controls['firstname'];
      this.lastname = this.formgroup.controls['lastname'];
      this.address = this.formgroup.controls['address'];
      this.mobile_no = this.formgroup.controls['mobile_no'];
      this.email = this.formgroup.controls['email'];
      this.password = this.formgroup.controls['password'];
      this.confirm_password = this.formgroup.controls['confirm_password']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  home()
  {
    this.navCtrl.popToRoot();
    //this.navCtrl.parent.select(0);
  }

}