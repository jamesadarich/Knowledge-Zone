export class UserInAFolder implements IUser  {
  fullName: string;
  constructor(public firstName :string, public lastName :string){
    this.fullName = firstName;

  }
}
