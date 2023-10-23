import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../modal/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  defaultValue!: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.defaultValue = data['user'];
    });
  }

  createUser() {
    this.user.addControl('name', new FormControl(this.defaultValue.name, Validators.required));
    this.user.addControl('email', new FormControl(this.defaultValue.email, Validators.required));
    this.user.addControl('mNumber', new FormControl(this.defaultValue.mNumber, Validators.required));
    this.user.addControl('type', new FormControl(this.defaultValue.type, Validators.required));
    this.user.addControl('address', new FormGroup({
      'line1': new FormControl(this.defaultValue.address.line1, Validators.required),
      'line2': new FormControl(this.defaultValue.address.line2, Validators.required),
      'pinCode': new FormControl(this.defaultValue.address.pinCode, Validators.required),
      'state': new FormControl(this.defaultValue.address.state, Validators.required),
      'country': new FormControl(this.defaultValue.address.country, Validators.required)
    }))
  }

  submit(){
    
  }
}
