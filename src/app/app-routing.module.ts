import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TableDataComponent } from './components/table-data/table-data.component';

const routes: Routes = [
  {
    path: '',
    component: PieChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
