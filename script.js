import fetch from 'node-fetch';

const apiUrl = 'https://www.codechef.com/api/contests/START104';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the API response data here
    // console.log(data);
    var contestStartTime = data.time.start;
    var contestStartTimeMillis = contestStartTime*1000;
    const twohours = 2 * 60 * 60 * 1000;
    console.log(new Date(contestStartTimeMillis-twohours));
  })
  .catch(error => {
    // Handle errors during the fetch
    console.error('Fetch error:', error);
  });
