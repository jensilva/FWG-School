import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardResolver } from './dashboard.resolver';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [],
  providers: [DashboardResolver]
})
export class DashboardModule {}
