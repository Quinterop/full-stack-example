import { Component } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

users: User[];

selectedUser?: User;
sortParam: number = 1;
sortOrder: boolean = true;

  constructor(private userService: UserServiceService) {
    this.users = [];
   }

   ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });

    setInterval(() => {
      this.userService.getUsers().subscribe((data: User[]) => {

        this.users = data;
        this.sort(this.sortParam, this.sortOrder);
      });
    }, 1000); // interval of 5000ms or 5s
    
    
  }

  delete(user: User) {
    this.userService.deleteUser(user);
    this.users = this.users.filter(u => u !== user);
  }

  edit(user: User) {
    this.selectedUser = user;
  }

  sort(param: number, order: boolean){
    this.sortParam = param;
    this.sortOrder = order;
    if(param == 1){
      if(order){
        this.users.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }else{
        this.users.sort((a, b) => (a.id < b.id) ? 1 : -1);
      }
    }else if(param == 2){
      if(order){
        this.users.sort((a, b) => (a.name > b.name) ? 1 : -1);
      }else{
        this.users.sort((a, b) => (a.name < b.name) ? 1 : -1);
      }
    }else if(param == 3){
      if(order){
        this.users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
      }else{
        this.users.sort((a, b) => (a.firstName < b.firstName) ? 1 : -1);
      }
    }else if(param == 4){
      if(order){
        this.users.sort((a, b) => (a.email > b.email) ? 1 : -1);
      }else{
        this.users.sort((a, b) => (a.email < b.email) ? 1 : -1);
      }
    }else if(param == 5){
      if(order){
        this.users.sort((a, b) => (a.type!.name > b.type!.name) ? 1 : -1);
      }else{
        this.users.sort((a, b) => (a.type!.name < b.type!.name) ? 1 : -1);
      }
    }
  }
}
