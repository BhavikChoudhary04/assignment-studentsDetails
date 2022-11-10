import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { ViewChild, AfterViewInit } from '@angular/core';
import { AllStudentsDataService } from 'src/app/services/all-students-data.service';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  selectedGrade: string;
  filteredData: any = [];
  allStudentsData: Student[];

  constructor(
    private studentsService: AllStudentsDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentsService.selectedGrade.subscribe((data) => {
      console.log(data);
      this.selectedGrade = data;
    });
    this.getStudentsData();
    // this.studentForm = this.fb.group({
    //   name: [null, [Validators.required, Validators.minLength(3)]],
    //   age: [
    //     null,
    //     [Validators.required, Validators.minLength(1), Validators.maxLength(2)],
    //   ],
    //   email: [null, [Validators.email]],
    //   engMarks: [null, [Validators.required]],
    //   scienceMarks: [null, [Validators.required]],
    //   mathsMarks: [null, [Validators.required]],
    //   sstMarks: [null, [Validators.required]],
    // });
  }

  getStudentsData() {
    this.studentsService.allStudentsData.subscribe((data) => {
      this.allStudentsData = data;
      console.log('this.selectedGrade: ', this.selectedGrade);
      console.log('allStudentsData:', this.allStudentsData);
      this.filteredData = this.allStudentsData.filter((student: any) => {
        return student.grade == this.selectedGrade;
      });
      console.log(this.filteredData);
      this.filteredData.forEach((student: any) => {
        student.isEdit = false;
      });
    });
  }

  enableEdit(student: any) {
    console.log('Edit It');
    this.filteredData.forEach((student: any) => {
      student.isEdit = false;
    });
    student.isEdit = true;
  }

  async saveDetails(student: any) {
    console.log(student);
    this.filteredData.forEach((oldValue: any) => {
      if (oldValue.id == student.id) {
        console.log('student details', oldValue);

        oldValue.name = student.name;
        oldValue.age = student.age;
        oldValue.email = student.email;
        oldValue.marks = student.marks;
        console.log('student details', oldValue);
      }
    });
    console.log('this.filteredData after save: ', this.filteredData);
    this.allStudentsData.forEach((student: Student) => {
      this.filteredData.forEach((item: any) => {
        if (student.id === item.id) {
          student.name = item.name;
          student.age = student.age;
          student.email = student.email;
          student.marks = student.marks;
        }
      });
    });
    console.log('this.allStudentsData after update', this.allStudentsData);
    this.studentsService.allStudentsData.next(this.allStudentsData);

    this.getStudentsData();
    student.isEdit = false;
  }

  goToChart() {
    this.router.navigate(['']);
  }

  cancelClick(student: any) {
    student.isEdit = false;
  }
}
