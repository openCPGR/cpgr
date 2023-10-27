import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../modal/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'lib-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  defaultValue!: IUser;

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.defaultValue = data['user'];
      this.createUser(this.defaultValue);
    });
  }

  createUser(defaultValue: IUser) {
    this.user.addControl(
      'name',
      new FormControl(defaultValue.name, Validators.required)
    );
    this.user.addControl(
      'email',
      new FormControl(defaultValue.email, Validators.required)
    );
    this.user.addControl(
      'mNumber',
      new FormControl(defaultValue.mNumber, Validators.required)
    );
    this.user.addControl(
      'type',
      new FormControl(defaultValue.type, Validators.required)
    );
    this.user.addControl(
      'address',
      new FormGroup({
        line1: new FormControl(defaultValue.address.line1, Validators.required),
        line2: new FormControl(defaultValue.address.line2, Validators.required),
        pinCode: new FormControl(
          defaultValue.address.pinCode,
          Validators.required
        ),
        state: new FormControl(defaultValue.address.state, Validators.required),
        country: new FormControl(
          defaultValue.address.country,
          Validators.required
        ),
      })
    );
  }

  get address(): FormGroup {
    return this.user.get('address') as FormGroup;
  }

  submit() {
    this.user.markAllAsTouched();
    const newUser = this.user.getRawValue();
    if (this.defaultValue.id) {
      this._userService.update(newUser, this.defaultValue.id);
    } else {
      this._userService.create(newUser);
    }

    this._router.navigateByUrl('user');
  }
}
