import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { SharedModule } from './shared/shared.module';
import { ChangeDetectionStrategyComponent } from './change-detection-strategy/change-detection-strategy.component';
import { ChangeDetectChildComponent } from './change-detection-strategy/change-detect-child/change-detect-child.component';
import { MenuComponent } from './menu/menu.component';
import { WebWorkerTestComponent } from './web-worker-test/web-worker-test.component';
import { DomSanitizerComponent } from './dom-sanitizer/dom-sanitizer.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    HomeComponent,

    DateFormatPipe,
      ChangeDetectionStrategyComponent,
      ChangeDetectChildComponent,
      MenuComponent,
      WebWorkerTestComponent,
      DomSanitizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
