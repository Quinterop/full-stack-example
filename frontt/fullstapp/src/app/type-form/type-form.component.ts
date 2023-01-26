import { Component } from '@angular/core';
import { UserType } from '../user-type';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent {
  selectedType: string | null;
  finalType: UserType;
  
  name: string;
  
  constructor(public userService: UserServiceService, private route: ActivatedRoute) { 
    this.finalType = new UserType();
    this.name = "";
    this.selectedType = null;
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const typename:string = params['type'];
      if(typename){
        //console.log(typename);
        this.name = typename;
        this.selectedType = typename;
      }
      else{
        this.name = "";
        this.selectedType = null;
      }
    });
    
  }
  
  onSubmit(){
    this.finalType.name = this.name;
    if(this.selectedType == null){
      this.userService.saveType(this.finalType);
    }else{
      this.userService.updateType(this.finalType, this.selectedType);
    }
  }
  
}
