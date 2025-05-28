import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { HomeComponent } from './home/home.component';
import { WebWorkerTestComponent } from './web-worker-test/web-worker-test.component';
import { DomSanitizerComponent } from './dom-sanitizer/dom-sanitizer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'change-detection', component: ChangeDetectionStrategyComponent },
  { path: 'web-worker', component: WebWorkerTestComponent },
  { path: 'dom-sanitizer', component: DomSanitizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
