import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-in-depth',
  imports: [JsonPipe, FormsModule],
  templateUrl: './signal-in-depth.html',
  styleUrls: ['./signal-in-depth.scss'],
})
export class SignalInDepth {
course = signal('Angular Signals in Depth');
courseLength = signal(120);
courseList = signal(['Introduction', 'Getting Started', 'Advanced Concepts']);
employee = signal({ name: 'John Doe', age: 30, position: 'Software Engineer' });


  // proxy property for two-way binding with [(ngModel)]
  get courseValue(): string {
    return this.course();
  }

  set courseValue(v: string) {
    this.course.set(v);
  }

updateCourse() {
  this.course.set('Angular Signals in Depth - Updated');
}

updateCourseList() {
  this.courseList.update(list => [...list, 'New Course']);
}

addCourse(courseName: string) {
  this.courseList.update(list => [...list, courseName]);
}

updateEmployee(key:string,event: Event) {
  this.employee.update(emp => ({ ...emp, [key]: (event.target as HTMLInputElement | null)?.value ?? emp.name }));
}
}
