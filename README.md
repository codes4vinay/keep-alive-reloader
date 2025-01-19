# **Keep Website Alive**

A lightweight Node.js package to reload a website periodically by sending GET requests, ensuring that your deployed website doesn't go down due to inactivity. Ideal for platforms like Render and others that put websites to sleep after periods of no activity.

---

## **Features**

- Sends periodic GET requests to a specified URL to prevent downtime.
- Configurable request interval.
- Lightweight with no external dependencies.

---

## **Installation**

Install the package via npm:

```bash
npm install keep-alive-reloader


Usage:

const keepWebsiteAlive = require('keep-alive-reloader');

// URL of the website to reload
const url = 'https://example.com';

// Interval in milliseconds (default: 30 minutes = 1800000 ms)
const interval = 1800000;

// Start reloading the website periodically
keepWebsiteAlive(url, interval);


Examples:
//Reload a Website Every 15 Minutes

const keepWebsiteAlive = require('keep-alive-reloader');

keepWebsiteAlive('https://mywebsite.com', 900000); // Reload every 15 minutes


Use Case
This package is particularly useful for:

Websites hosted on platforms like Render, which may enter a sleep state after a period of inactivity.
Keeping personal projects or low-traffic websites alive without manual intervention.

Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

```

License
This project is licensed under the MIT License.
Happy Coding!
---

~ From Vinay Kumar
