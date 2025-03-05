import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';

const routes: Routes = [
  { path: 'pipes', component: PipesComponent },
  { path: 'change-detection', component: ChangeDetectionStrategyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
