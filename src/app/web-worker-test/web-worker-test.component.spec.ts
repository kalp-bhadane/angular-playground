import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkerTestComponent } from './web-worker-test.component';

describe('WebWorkerTestComponent', () => {
  let component: WebWorkerTestComponent;
  let fixture: ComponentFixture<WebWorkerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebWorkerTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
