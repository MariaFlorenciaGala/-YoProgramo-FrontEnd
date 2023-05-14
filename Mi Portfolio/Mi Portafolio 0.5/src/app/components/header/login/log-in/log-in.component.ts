import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{
form:FormGroup;

  constructor( private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: [""],
        notificationToken: [""]
      }),
    })
  }
  ngOnInit(): void {}

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  }

