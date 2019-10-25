import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binary Calculator';
  box:any;
  value='';
  values =[];
  x:any;

  onKey(value: string) {
    this.value = value;
  }

  addOne(){
    this.value +='1' ;
  }

  addZero(){
    this.value +='0' ;
  }

  submit(){
    if(this.values.length>=2){
    if(this.values[this.values.length]!='-' && this.values[this.values.length]!='+') 
      this.values[this.values.length]=this.value
    for(let i=0; i<this.values.length; i++){
      if(this.values[i]!='+' && this.values[i]!='-'){
        this.values[i]=parseInt(this.values[i],2)
      }
    }
    for(let i=0; i<this.values.length; i++){
      if(this.values[i-1]=='+'){
        this.x=this.values[i-2]+this.values[i]
        //console.log(this.x)
      }
      if(this.values[i-1]=='-'){
        this.x=this.values[i-2]-this.values[i]
        //console.log(this.x)
      }
    }
    for(let i=0; i<this.values.length; i++){
      if(this.values[i]!='+' && this.values[i]!='-'){
        this.values[i]=parseInt(this.values[i],10).toString(2)
      }
    }
    this.value=parseInt(this.x,10).toString(2)
  }
  }

  plus(){
    if(this.values[this.values.length-1]!='-' && this.values[this.values.length-1]!='+') {
      this.value +='+';
      this.values[this.values.length]=this.value.substring(0,this.value.length-1);
      this.values[this.values.length]=this.value[this.value.length-1];
      this.value='';
    }
    else{
      this.value
    }
  }

  minus(){
    if(this.values[this.values.length-1]!='-' && this.values[this.values.length-1]!='+') {
      this.value +='-';
      this.values[this.values.length]=this.value.substring(0,this.value.length-1);
      this.values[this.values.length]=this.value[this.value.length-1];
      this.value='';
    }
    else{
      this.value;
    }
  }
}