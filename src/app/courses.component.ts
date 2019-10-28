import { Component } from "@angular/core"
import { CoursesService } from './courses.service';
import { Button } from 'protractor';

@Component({
    selector : 'courses',
    template : `
                <h2 *ngIf="flag; else otherblock">
                TrueRunner
                </h2>
                <ng-template #otherblock>
                <h2> FalseRunner</h2>
                </ng-template>

                <h2 [ngClass] = messageClass>{{title}}<h2>
                <ul class = success>
                <li *ngFor = "let course of courses">
                {{course}}
                </li>
                </ul>

                <input [(ngModel)]="name" type= "text">
                {{name}}

                <input #myid bind-disabled = isDisabled type = "text">
                <p [style.color]="hasError ?'orange':'green'">all i want is a booty and a beat<p>
                <button (click)= "onclick(myid.value)">Greet</button>
                <button (click)="greet='hello bhai'">Hello</button>
                {{greet}}

             `,

    styles :
    [`
    .danger {color:red;}  
    .success { color : green ;}   `  
    ]
})

export class CoursesComponent{
title =  "List Of Courses";
isDisabled = false;
courses;
flag = true;
constructor(service : CoursesService){
  
    this.courses = service.getCourses();
}
 hasError = true;
 isSpecial = false;
 messageClass = {
     "success" : !this.hasError,
     "danger" : this.hasError
 }
 onclick(value)
 {
    console.log(value)
     
 }
name = "";

 }
