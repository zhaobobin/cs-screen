import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';

import { IndexComponent } from './pages/index/index.component';
import { InsuredComponent } from './pages/insured/insured.component';
import { LevyComponent } from './pages/levy/levy.component';
import { CostComponent } from './pages/cost/cost.component';
import { RiskComponent } from './pages/risk/risk.component';

import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    InsuredComponent,
    LevyComponent,
    CostComponent,
    RiskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzStatisticModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
