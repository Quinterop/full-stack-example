import { UserType } from './../user-type';
import { User } from './../user';
import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  selectedUser?: User;
  finalUser: User;
  userTypes: UserType[];
  
  name: string;
  firstName: string;
  email: string;
  selectedType: UserType;
  
  constructor(public userService: UserServiceService, private route: ActivatedRoute) {
    this.selectedType = new UserType();
    this.finalUser = new User();
    this.userTypes = [];
    
    if(this.selectedUser == null){
      
      this.name = "";
      this.firstName = "";
      this.email = "";
      
    }else{  
      this.name = this.selectedUser.name;
      this.firstName = this.selectedUser.firstName;
      this.email = this.selectedUser.email;
      if(this.selectedUser.type != null)
      this.selectedType = this.selectedUser.type;
    }
  }
  
  ngOnInit() {
    this.userService.getUserTypes().subscribe((data: UserType[]) => {
      this.userTypes = data;
    });
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if(id) {

        this.userService.getUsers().subscribe((data: User[]) => {
          this.selectedUser = data.find(u => u.id == id);
          //console.log(id);


          if(this.selectedUser){
          this.name = this.selectedUser.name;
          this.firstName = this.selectedUser.firstName;
          this.email = this.selectedUser.email;
          if(this.selectedUser.type != null)
          this.selectedType = this.selectedUser.type;
          }
        });
      }
    });
    this.userService.getUserTypes().subscribe((data: UserType[]) => {
      this.userTypes = data;
    });
  }
  
  onSubmit(){
    this.finalUser.name = this.name;
    this.finalUser.firstName = this.firstName;
    this.finalUser.email = this.email;
    this.finalUser.type = this.selectedType;
    if(this.selectedUser == null){
      this.userService.saveUser(this.finalUser);
    }else{
      this.userService.updateUser(this.finalUser,this.selectedUser.id);
      
      // console.log("User saved: "+this.finalUser.name+" "+this.finalUser.firstName+" "+this.finalUser.email+" "+this.finalUser.type?.name+" "+this.finalUser.type?.description+"")
      // console.log(this.selectedType?.name+" "+this.selectedType?.description+ this.selectedType)
    }
    
  }
}
