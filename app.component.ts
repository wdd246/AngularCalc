import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amiw';
  box:any;
  value='';
  values =[];
  onKey(value: string) {
    this.value = value;
  }
  addOne(){
    this.value +='1' ;
  }
  addZero(){
    this.value +='0' ;
  }
  plus(){
    if(this.value.charAt(this.value.length-1)!='-' && this.value.charAt(this.value.length-1)!='+') {
      this.value +='+';
      this.values[this.values.length]=this.value.substring(0,this.value.length-1);
      this.value='';
      if(this.values.length>1)
      this.values[0]=Number(this.values[0])+Number(this.values[1]);
      //this.value=this.values[0];
    }
    else{
      this.value;
    }
  }
  minus(){
    if(this.value.charAt(this.value.length-1)!='-' && this.value.charAt(this.value.length-1)!='+') {
      this.value +='-';
      this.values[this.values.length]=this.value.substring(0,this.value.length-1);
      this.value='';
      if(this.values.length>1)
      this.values[0]=Number(this.values[0])-Number(this.values[1]);
      //this.value=this.values[0];
    }
    else{
      this.value;
    }
  }
}
