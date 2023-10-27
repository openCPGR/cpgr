import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INav } from 'projects/ui-tools/src/public-api';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'lib-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  nav: INav[] = [
    {
      name: 'User Management',
      link: '/user',
      icon: 'ticket-detailed',
    },
    {
      name: 'View',
      link: '',
      icon: 'ticket-detailed',
    },
  ];
  user: IUser | undefined = undefined;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((data) => {
      this.getUser(parseInt(data['id']));
    });
  }

  getUser(id: number) {
    this.user = this._userService.getUser(id);
  }
}
