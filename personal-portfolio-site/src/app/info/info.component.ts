import { Skill } from './../skill';
import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../mock-skills1';
import { Skill2 } from '../skill2';
import { SKILLS2 } from '../mock-skills2';





@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  searchStr=""
  searchStr2=""

  skills = SKILLS;
  selectedSkill: Skill | undefined;

  skills2 = SKILLS2;
  selectedSkill2: Skill2 | undefined;

  ngOnInit(): void {
  }


}
