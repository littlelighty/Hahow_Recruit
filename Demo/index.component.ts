import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './Demo/index.html',
})
export class DemoComponent { 
  name = 'Alex Chen';
  birthday = 'May 8th';
  age = 26; 
  text="編輯";

  edit=false;

  call(num:string){
    this.edit= !this.edit;
    if(this.text=="編輯"){
      this.text = "確定";
    }
    else
      this.text = "編輯";
  }
}
