import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root',
})
export class AllStudentsDataService {
  studentsData: Student[] = [
    {
      id: 1,
      name: 'Arun',
      age: 18,
      email: 'arun@gmail.com',
      marks: [
        {
          english: 66,
          science: 48,
          maths: 27,
          socialStudies: 28,
        },
      ],
      grade: 'grade',
    },
    {
      id: 2,
      name: 'Pooja',
      age: 18,
      email: 'pooja@gmail.com',
      marks: [
        {
          english: 86,
          science: 63,
          maths: 62,
          socialStudies: 91,
        },
      ],
      grade: 'grade',
    },
    {
      id: 3,
      name: 'Dev',
      age: 18,
      email: 'dev@gmail.com',
      marks: [
        {
          english: 46,
          science: 58,
          maths: 79,
          socialStudies: 31,
        },
      ],
      grade: 'grade',
    },
    {
      id: 4,
      name: 'Priya',
      age: 18,
      email: 'priya@gmail.com',
      marks: [
        {
          english: 66,
          science: 81,
          maths: 87,
          socialStudies: 75,
        },
      ],
      grade: 'grade',
    },
    {
      id: 5,
      name: 'Yash',
      age: 18,
      email: 'yb@gmail.com',
      marks: [
        {
          english: 70,
          science: 91,
          maths: 79,
          socialStudies: 70,
        },
      ],
      grade: 'grade',
    },
    {
      id: 6,
      name: 'Tej',
      age: 19,
      email: 'arun@gmail.com',
      marks: [
        {
          english: 67,
          science: 61,
          maths: 72,
          socialStudies: 71,
        },
      ],
      grade: 'grade',
    },
    {
      id: 7,
      name: 'Mohan',
      age: 18,
      email: 'mohan@gmail.com',
      marks: [
        {
          english: 70,
          science: 58,
          maths: 54,
          socialStudies: 38,
        },
      ],
      grade: 'grade',
    },
    {
      id: 8,
      name: 'Saga',
      age: 17,
      email: 'saga@gmail.com',
      marks: [
        {
          english: 51,
          science: 85,
          maths: 77,
          socialStudies: 86,
        },
      ],
      grade: 'grade',
    },
    {
      id: 9,
      name: 'Gaurav',
      age: 17,
      email: 'gav@gmail.com',
      marks: [
        {
          english: 76,
          science: 70,
          maths: 71,
          socialStudies: 50,
        },
      ],
      grade: 'grade',
    },
    {
      id: 10,
      name: 'Nidhi',
      age: 17,
      email: 'nidhi@gmail.com',
      marks: [
        {
          english: 66,
          science: 61,
          maths: 72,
          socialStudies: 55,
        },
      ],
      grade: 'grade',
    },
    {
      id: 11,
      name: 'Rajiv',
      age: 17,
      email: 'rajiv@gmail.com',
      marks: [
        {
          english: 71,
          science: 78,
          maths: 70,
          socialStudies: 67,
        },
      ],
      grade: 'grade',
    },
    {
      id: 12,
      name: 'Kunal',
      age: 18,
      email: 'kunal@gmail.com',
      marks: [
        {
          english: 63,
          science: 68,
          maths: 69,
          socialStudies: 72,
        },
      ],
      grade: 'grade',
    },
    {
      id: 13,
      name: 'Zavi',
      age: 16,
      email: 'zavi@gmail.com',
      marks: [
        {
          english: 85,
          science: 83,
          maths: 89,
          socialStudies: 89,
        },
      ],
      grade: 'grade',
    },
    {
      id: 14,
      name: 'Bravo',
      age: 16,
      email: 'bravo@gmail.com',
      marks: [
        {
          english: 86,
          science: 89,
          maths: 83,
          socialStudies: 82,
        },
      ],
      grade: 'grade',
    },
    {
      id: 15,
      name: 'Preeti',
      age: 17,
      email: 'preeti@gmail.com',
      marks: [
        {
          english: 79,
          science: 70,
          maths: 81,
          socialStudies: 78,
        },
      ],
      grade: 'grade',
    },
    {
      id: 16,
      name: 'Ronaldo',
      age: 16,
      email: 'r7@gmail.com',
      marks: [
        {
          english: 76,
          science: 81,
          maths: 70,
          socialStudies: 75,
        },
      ],
      grade: 'grade',
    },
    {
      id: 17,
      name: 'Raja',
      age: 16,
      email: 'raja@gmail.com',
      marks: [
        {
          english: 71,
          science: 79,
          maths: 74,
          socialStudies: 67,
        },
      ],
      grade: 'grade',
    },
    {
      id: 18,
      name: 'Manish',
      age: 16,
      email: 'manish@gmail.com',
      marks: [
        {
          english: 69,
          science: 61,
          maths: 65,
          socialStudies: 72,
        },
      ],
      grade: 'grade',
    },
  ];

  allStudentsData = new BehaviorSubject<Student[]>(this.studentsData);
  selectedGrade = new BehaviorSubject<string>('gradeA');

  constructor() {}
}
