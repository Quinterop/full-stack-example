import { UserType } from "./user-type";

export class User {
    constructor(
      public id: number = 0,
      public name: string = "",
      public email: string = "",
      public firstName: string = "",
      public type: UserType | null = null
    ) { }
  }
