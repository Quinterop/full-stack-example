import { UserServiceService } from './../user-service.service';
import { UserType } from './../user-type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-typelist',
  templateUrl: './typelist.component.html',
  styleUrls: ['./typelist.component.css']
})
export class TypelistComponent {
userTypes: UserType[];

selectedUserType?: UserType;

constructor(private userService: UserServiceService) {
  this.userTypes = [];
   }

  ngOnInit() {
    this.userService.getUserTypes().subscribe((data: UserType[]) => {
      this.userTypes = data;
      //console.log(data);
    });
  }

  delete(userType: UserType) {
    this.userService.deleteUserType(userType);
    this.userTypes = this.userTypes.filter(u => u !== userType);
  }

  edit(userType: UserType) {
    this.selectedUserType = userType;
  }
}



