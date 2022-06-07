import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {



  name:string="";
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

  /*
  Comcontrol=new FormGroup({
    NameFormControl : new FormControl('', [Validators.required])
  })*/

   control = new FormControl('', Validators.required);

  





  constructor() { }

  ngOnInit(): void {

  }

  post(){
   this.name2=(<HTMLInputElement>document.getElementById('n1')).value;
   this.comment2=(<HTMLInputElement>document.getElementById('c1')).value;


   const para0 = document.createElement("div");
   para0.style.background='#AFEEEE'
   para0.style.fontSize="20px"
   para0.style.padding="5px"
   para0.style.margin="5px"
   document.body.appendChild(para0);

 const para = document.createElement("p");
    para.innerText = this.name2;
   

    const para2 = document.createElement("p");
    para2.innerText = this.comment2;
   



para0.appendChild(para);
para0.appendChild(para2);
       
  
       



  }


}
