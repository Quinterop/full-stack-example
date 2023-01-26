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

  constructor(private userService: UserServiceService) {
    this.users = [];
   }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      //console.log(data);
    });

    //wait 500ms before reloading the data
    setTimeout(() => {
      this.userService.getUsers().subscribe((data: User[]) => {
        this.users = data;
        //console.log(data);
      });
    });
  }

  delete(user: User) {
    this.userService.deleteUser(user);
    this.users = this.users.filter(u => u !== user);
  }

  edit(user: User) {
    this.selectedUser = user;
  }
}
