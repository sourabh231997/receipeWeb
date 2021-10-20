import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  complexForm:any;

  constructor(fb: FormBuilder, private userService: UserService) {
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
      console.log(success);
    })
  }

}
