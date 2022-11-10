export interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  marks: [
    {
      english: number;
      science: number;
      maths: number;
      socialStudies: number;
    }
  ];
  grade: string;
}
