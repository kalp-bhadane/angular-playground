/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const max = data;
  const primes: number[] = [];

  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  postMessage(primes);
});

function isPrime(num: number): boolean {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}


