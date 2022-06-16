import { Skill } from './skill';
import { SKILLS } from './mock-skills1';
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(skills: Skill[],value:string) {
        return skills.filter(skill =>{
            return skill.name?.toUpperCase().includes(value.toUpperCase())
        })
        
    }
}

