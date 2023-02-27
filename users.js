import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  sleep(1);
}

export let options = {
  vus: 10,
  duration: '1m',
};
