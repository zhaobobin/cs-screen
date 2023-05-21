import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { InsuredComponent } from './pages/insured/insured.component';
import { LevyComponent } from './pages/levy/levy.component';
import { CostComponent } from './pages/cost/cost.component';
import { RiskComponent } from './pages/risk/risk.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'insured',
    component: InsuredComponent,
  },
  {
    path: 'levy',
    component: LevyComponent,
  },
  {
    path: 'cost',
    component: CostComponent,
  },
  {
    path: 'risk',
    component: RiskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
