import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllStudentsDataService } from 'src/app/services/all-students-data.service';
import * as Highcharts from 'highcharts';
import { Student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  studentsPassed: Student[];
  selectedGrade: string;
  updateFlag: boolean = false;

  constructor(
    private router: Router,
    private studentsService: AllStudentsDataService
  ) {}

  data: any = [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'gradeA',
          y: 0,
        },
        {
          name: 'gradeB',
          y: 0,
        },
        {
          name: 'gradeC',
          y: 0,
        },
      ],
    },
  ];

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: '% of Students Passed in 2021-22',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: this.data,
  };

  ngOnInit(): void {
    this.studentsService.allStudentsData.subscribe((data) => {
      if (data) {
        console.log(data);

        this.studentsPassed = data;
        console.log('this.studentsPassed: ', this.studentsPassed);
        this.calculateGrade();
      }
    });
    this.studentsService.selectedGrade.subscribe((data: any) => {
      this.selectedGrade = data;
      console.log('this.selectedGrade: ', this.selectedGrade);
    });
  }

  async calculateGrade() {
    let totalStudents: number = this.studentsPassed.length;
    let gradAStudents: number = 0;
    let gradBStudents: number = 0;
    let gradCStudents: number = 0;
    await this.studentsPassed.forEach((student: Student) => {
      let totalMarks =
        student.marks[0].english +
        student.marks[0].science +
        student.marks[0].maths +
        student.marks[0].socialStudies;
      let percentage: number = (totalMarks / 400) * 100;
      console.log(percentage);
      if (percentage >= 70) {
        student.grade = 'gradeA';
        gradAStudents += 1;
      } else if (percentage >= 50) {
        student.grade = 'gradeB';
        gradBStudents += 1;
      } else {
        student.grade = 'gradeC';
        gradCStudents += 1;
      }
    });
    console.log(gradAStudents, gradBStudents, gradCStudents);
    console.log(totalStudents);
    console.log(this.studentsPassed);

    let percentA: number = Math.round((gradAStudents / totalStudents) * 100);
    let percentB: number = Math.round((gradBStudents / totalStudents) * 100);
    let percentC: number = Math.round((gradCStudents / totalStudents) * 100);

    console.log(percentA, percentB, percentC);
    this.updateChart(percentA, percentB, percentC);
  }
  // getGrade() {
  //   this.studentsService.selectedGrade.subscribe((data: any) => {
  //     console.log(data);

  //     this.selectedGrade = data;
  //     return this.selectedGrade;
  //   });
  // }

  onChartClick(e: any) {
    if (e.point) {
      let grade = e.point.options.name;
      console.log(grade);
      this.selectedGrade = grade;
      this.studentsService.selectedGrade.next(this.selectedGrade);
      this.router.navigate(['table']);
    }
  }

  updateChart(percentA: number, persentB: number, persentC: number) {
    this.data = {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'gradeA',
          y: percentA,
        },
        {
          name: 'gradeB',
          y: persentB,
        },
        {
          name: 'gradeC',
          y: persentC,
        },
      ],
    };
    this.chartOptions.series = this.data;
    this.updateFlag = true;
  }
}
