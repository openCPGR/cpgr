import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { USER_TYPE } from '../enums/user.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    {
      id:1,
      name:'Yash',
      email:'abc@gmail.com',
      mNumber:89080008,
      type:USER_TYPE.OFFICER,
      address :{
        line1:'A',
        line2:'B',
        pinCode:123456,
        state:'MH',
        country:'India'
      }
    }
  ];
  constructor() {}

  create(user: IUser) {
    user.id = this.users.length+1;
    this.users.push(user);
  }

  update(user: IUser): void {
    const id = user.id;
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users[index] = user;
    }
  }

  getList(): IUser[] {
    return this.users;
  }

  getUser(id: number): IUser | undefined {
    return this.users.find((user) => user.id === id);
  }
}
