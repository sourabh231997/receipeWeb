import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { NotificationService } from '../_services/notification.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  complexForm:any;

  constructor(fb: FormBuilder, private userService: UserService,private notifyService : NotificationService) {
    this.complexForm = fb.group({
    })
  }

  ngOnInit() {
    this.model.user_name = '';
    this.model.email = '';
    this.model.phone = '';
    this.model.message = '';
  }

  sendMail(){
    let userData = {
      'name':this.model.user_name,
      'email':this.model.email,
      'phone':this.model.phone,
      'message':this.model.message
    }
    this.userService.sendUserMailData(userData).subscribe(success => {
      if(success && success['err']){
        if(this.model.user_name == '') this.notifyService.showError("name", "Field Required")
        if(this.model.email == '') this.notifyService.showError("email", "Field Required")
        if(this.model.phone == '') this.notifyService.showError("phone", "Field Required")
      }else{
        this.notifyService.showSuccess("Mail sent successfully !!", "Rasayati")
      }
    })
  }

}
