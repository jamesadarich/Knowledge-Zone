
/// <reference path="IUser.ts"/>
export class User implements IUser  {
  fullName: string;
  constructor(public firstName :string, public lastName :string){
    this.fullName = firstName;

  }
}
