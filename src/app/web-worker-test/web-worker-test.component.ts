import { Component } from '@angular/core';

@Component({
  selector: 'app-web-worker-test',
  templateUrl: './web-worker-test.component.html',
  styleUrls: ['./web-worker-test.component.css']
})
export class WebWorkerTestComponent {
  limit = 10000;
  primes: number[] = [];
  constructor() { }

  calculatePrimes() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./test1.worker', import.meta.url), { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.primes = data;
      };
      worker.postMessage(this.limit);
    } else {
      console.error('Web Workers are not supported in this environment.');
    }
  }
}
