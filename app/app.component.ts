import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binary Calculator';
  value='';
  values =[];
  dec:any;
  x:any;

  onChange(event) {
    this.value = event.target.value;
  }

  addOne(){
    this.value +='1' ;
  }

  addZero(){
    this.value +='0' ;
  }

  clear(){
    this.dec = '';
    this.value = '';
    this.values = [];
    this.x = '';
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
      this.dec=this.x;
      this.value=parseInt(this.x,10).toString(2)
    }
  }

  plus(){
    if(this.values[this.values.length-1]!='-' && this.values[this.values.length-1]!='+') {
      this.value +='+';
      this.getBinAndClear()
    }
    else{
      this.value
    }
  }

  minus(){
    if(this.values[this.values.length-1]!='-' && this.values[this.values.length-1]!='+') {
      this.value +='-';
      this.getBinAndClear()
    }
    else{
      this.value;
    }
  }

  getBinAndClear(){
    this.values[this.values.length]=this.value.substring(0,this.value.length-1);
    this.values[this.values.length]=this.value[this.value.length-1];
    this.value='';
  }
}