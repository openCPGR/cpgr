import { USER_TYPE } from '../enums/user.enum';
import { IAddress, IUser } from '../interfaces/user.interface';

export class User implements IUser {
  id: number | null = null;
  name: string = '';
  email: string = '';
  mNumber: number | null = null;
  type: USER_TYPE = USER_TYPE.CITIZEN;
  address: IAddress = new Address();
  constructor(user?: IUser) {
    this.id = user?.id || null;
    this.name = user?.name || '';
    this.email = user?.email || '';
    this.mNumber = user?.mNumber || null;
    this.type = user?.type || USER_TYPE.CITIZEN;
    this.address = new Address(user?.address);
  }
}

export class Address implements IAddress {
  line1?: string | undefined = '';
  line2?: string | undefined = '';
  pinCode: number | null = null;
  country: string = '';
  state: string = '';
  constructor(address?: IAddress) {
    this.line1 = address?.line1 || '';
    this.line2 = address?.line2 || '';
    this.pinCode = address?.pinCode || null;
    this.country = address?.country || '';
    this.state = address?.state || '';
  }
}
