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

sortOrder: boolean = true;

constructor(private userService: UserServiceService) {
  this.userTypes = [];
   }

  ngOnInit() {
    this.userService.getUserTypes().subscribe((data: UserType[]) => {
      this.userTypes = data;
      //console.log(data);
    });
        setInterval(() => {
      this.userService.getUserTypes().subscribe((data: UserType[]) => {
        this.userTypes = data;
        this.sort(this.sortOrder);
      });
    }, 1000); // interval of 5000ms or 5s
    
   
  }

  delete(userType: UserType) {
    this.userService.deleteUserType(userType);
    this.userTypes = this.userTypes.filter(u => u !== userType);
  }

  edit(userType: UserType) {
    this.selectedUserType = userType;
  }

  sort(order:boolean){
    this.sortOrder = order;
    if(order){
      this.userTypes.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }else{
      this.userTypes.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
  }
}



