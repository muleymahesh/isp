import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators,FormControl,AbstractControl } from '@angular/forms';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  formgroup:FormGroup;
  email:AbstractControl;
  mobile_no:AbstractControl;

  validation_msg:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {
 
    this.validation_msg={
      'email':[
        { type:'required', message:'Enter the email id.'},
        { type:'pattern', message:'Please enter the correct email or valid email.'}
      ],
      'mobile_no':[
        { type:'required', message:'Enter the phone number.'},
        { type:'maxlength', message:'Enetr 10 digit number.'},
        { type:'minlength', message:'Enetr 10 digit number.'},
        { type:'pattern', message:'Phone number must be in digit.'},
     ]
    }

    this.formgroup = formbuilder.group({
      email:['',Validators.compose([Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")])],
      mobile_no:['',Validators.compose([Validators.maxLength(10),Validators.minLength(10),Validators.required,Validators.pattern("[0-9]*")])]
    });

    this.email = this.formgroup.controls['email'];
    this.mobile_no = this.formgroup.controls['mobile_no']; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

}