import http from "k6/http";
import { sleep } from "k6";

export default function () {
  // Send a POST request to get some data
  const url = "https://test-api.k6.io/api/data";
  const payload = JSON.stringify({ key: "value" });
  const headers = { "Content-Type": "application/json" };
  const response = http.post(url, payload, { headers });

  // Extract the data from the response and use it in a new GET request
  const data = JSON.parse(response.body);
  const newUrl = `https://test-api.k6.io//public/crocodiles/${data.id}`;
  const newResponse = http.get(newUrl);

  // Log the response from the new request
  console.log(newResponse.body);

  // Wait for 1 second before sending another request
  sleep(1);

  
}
