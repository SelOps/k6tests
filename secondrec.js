import http from "k6/http";
import { sleep } from "k6";

export default function () {
  // Generate a random ID between 1 and 10
  const id = Math.floor(Math.random() * 10) + 1;

  // Send a GET request to get data for the crocodile with the random ID
  const url = `https://test-api.k6.io/public/crocodiles/${id}/`;
  const response = http.get(url);

  // Log the response to the console
  console.log(response.body);

  // Wait for 1 second before sending another request
  sleep(1);
}
