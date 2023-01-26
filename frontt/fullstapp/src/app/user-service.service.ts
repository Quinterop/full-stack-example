import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  
  
  Url:string;
  
  constructor(private http:HttpClient) { 
    this.Url = 'http://localhost:8080/';
  }
  
  public saveUser(user:User) {
    return this.http.post<User>(this.Url+"userForm", user).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      //  console.log(error);
      // get the status as error.status
    });
  }
  
  public getUsers() {
    return this.http.get<User[]>(this.Url+"users");
  }
  
  public getUserTypes() {
    return this.http.get<UserType[]>(this.Url+"types");
  }
  
  saveType(type: UserType) {
    return this.http.post<UserType>(this.Url+"typeForm", type).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      //  console.log(error);
      // get the status as error.status
    });
  }
  
  public deleteUser(user: User) {
    return this.http.delete(this.Url+"deleteUser/"+user.id).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      //  console.log(error);
      // get the status as error.status
    });
  }
  
  public deleteUserType(userType: UserType) {
    return this.http.delete(this.Url+"deleteType/"+userType.name).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      alert("Cannot delete type that is in use");
      //reload page
      window.location.reload();
    });
  }
  
  public updateUser(newuser: User,oldid: number) {
    return this.http.put<User>(this.Url+"updateUser/"+oldid, newuser).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      //  console.log(error);
      // get the status as error.status
    });
  }
  
  public updateUserType(newuserType: UserType) {
    return this.http.put<UserType>(this.Url+"updateType/"+newuserType.name, newuserType).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      //  console.log(error);
      // get the status as error.status
    });
  }
  
  updateType(finalType: UserType, oldname: string) {
    return this.http.put<UserType>(this.Url+"updateType/"+oldname, finalType).subscribe( (data) => {
      //  console.log(data);
    },
    (error) => {
      //  console.log(error);
      // get the status as error.status
    });
  }
  
  
}
