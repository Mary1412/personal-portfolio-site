import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {




  comment:string="";


  name2:string="";
  comment2:string="";

  postComment: string[] = [];
  postName: string[] = [];

  user = {     
    name: "John",  
    comment: "comment"  
          
  };
  
  isActive = true;
  
  
  comControl=new FormGroup({
    control : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
    text : new FormControl('', [Validators.required])
  })



  constructor() { }
com="";

  ngOnInit(): void {
  

 this.com=String(localStorage.getItem('comments')).slice(1,-1);
 this.com=this.com.replace(/"/g, '');
 //if (this.com=="ul"){
 
 //} 
 this.comments2=this.com.split(',');
    

  }

  //comment=''
  name:string='';
  
  


  comments: string[] = [];
  comments2: string[] = [];
  names:string[]=[];
 
  add(comment: string) {
    this.comments.push(comment);
  
  }

post(){
  this.comments.push(this.name);
 this.comments.push(this.comment);
 //this.comments.push( "\n");
 //this.comments2=this.comments;
 //console.log("c2",this.comments2)

 const jsonData1 = JSON.stringify(this.comments)
 localStorage.setItem('comments', jsonData1)
 this.com=String(localStorage.getItem('comments')).slice(1,-1);
 this.com=this.com.replace(/"/g, '');

 this.comments2=this.com.split(',');
 

 
}





/*

  post(){
   this.name2=(<HTMLInputElement>document.getElementById('n1')).value;
   this.comment2=(<HTMLInputElement>document.getElementById('c1')).value;
   this.comment2=(<HTMLInputElement>document.getElementById('c1')).value;


   const para0 = document.createElement("div");
   para0.setAttribute("id", "p0");
   para0.style.fontSize="20px"
   para0.style.padding="5px"
   para0.style.margin="5px"
   para0.style.visibility="visible"

   
   document.body.appendChild(para0);

 const para = document.createElement("p");
    para.innerText = this.name2;
   

    const para2 = document.createElement("p");
    para2.innerText = this.comment2;
 

para0.appendChild(para);
para0.appendChild(para2);
 

  }
*/

}
