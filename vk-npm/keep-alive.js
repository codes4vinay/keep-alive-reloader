const https = require("https");

/**
 * Starts a periodic request to a website to keep it alive.
 *
 * @param {string} url - The URL of the website to reload.
 * @param {number} interval - The interval between requests in milliseconds. Default is 30 minutes (1800000 ms).
 */
function keepWebsiteAlive(url, interval = 1800000) {
  if (!url) {
    throw new Error("URL is required to keep the website alive.");
  }

  if (typeof interval !== "number" || interval <= 0) {
    throw new Error("Interval must be a positive number (in milliseconds).");
  }

  console.log(`Keeping the website alive: ${url}`);
  console.log(`Requests will be sent every ${interval / 60000} minutes.`);

  // Function to send a GET request to the URL
  function reloadWebsite() {
    https
      .get(url, (res) => {
        console.log(
          `[${new Date().toISOString()}] Website reloaded: ${url} (Status: ${res.statusCode})`
        );
      })
      .on("error", (error) => {
        console.error(
          `[${new Date().toISOString()}] Error reloading website: ${error.message}`
        );
      });
  }

  // Start the interval
  setInterval(reloadWebsite, interval);
}

module.exports = keepWebsiteAlive;

