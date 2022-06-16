import { Skill } from './skill';
import { SKILLS } from './mock-skills1';
import { Pipe, PipeTransform } from "@angular/core";
import { Skill2 } from './skill2';


@Pipe({
    name: 'search2'
})

export class SearchPipe2 implements PipeTransform{
    transform(skills2: Skill2[],value:string) {
        return skills2.filter(skill2 =>{
            return skill2.name?.toUpperCase().includes(value.toUpperCase())
        })
        
    }
}

