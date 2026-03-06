const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/professional', (req, res) => {
  res.json({
    professionalName: "JANE SMITH",
    base64Image: "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADy0lEQVR4nO3dO2sUURzG4ZNEQRBBRQRBsBMEQRARLPwANnaCYGMhWIiFhY2FhYWFhYWFhVjYWFj4ASwEQRDESrAQBEEQBEG0EEQQBEEQ3GLy7s7uzOzM7jkz5/nBQLI7e/b8z+zs7O5sBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBgdmQdgB1bsg7AjjVZB2DHqqwDsGNF1gHYsSzrAOxYknUAdizMOgA7FmQdgB0Lsg7AjvlZB2DHvKwDsGNu1gHYMSfrAOyYnXUAdszKOgA7ZmYdgB0zsg7AjulZB2DHtKwDsOPQrAOwY2rWAdgxJesA7JicdQB2TMo6ADsmZh2AHROyDsCO8VkHYMe4rAOwY2zWAdgxJusA7BiddQB2jMo6ADtGZh2AHSOyDsCO4VkHYMewrAOwY2jWAdgxJOsA7BiadQB2DM46ADsGZx2AHYOyDsCOgVkHYMeArAOwY0DWAdgxIOsA7OifdQB29Ms6ADv6Zh2AHX2yDsCO3lkHYEevrAOwY2DWAdjRK+sA7OiRdQB2dM86ADu6ZR2AHV2zDsCOLlkHYEfnrAOwo1PWAdjRMesA7OiQdQB2tM86ADvaZR2AHW2zDsCONlkHYEfrrAOwo1XWAdjRMusA7GiRdQB2NM86ADuaZh2AHU2yDsCOxlkHYEejrAOwo2HWAdhRP+sA7KiXdQB21M06ADvqZB2AHbWzDsCOWlkHYEftrAOwo1bWAdhRP+sA7KiXdQB21M06ADvqZB2AHbWzDsCOWlkHYEeNrAOwI511AHZUzzoAOyqzDsCOQ7IOwI6KrAOw45CsA7CjPOsA7CjLOgA7yrIOwI7SrAOwoTjrAOzYn3UAduzLOgA79mYdgB17sg7Ajt1ZB2DHrqwDsGNn1gHYsSPrAOzYnnUAdmzNOgA7tmQdgB2bsw7Ajk1ZB2DHxqwDsGND1gHYsT7rAOxYl3UAdqzNOgA71mQdgB2rsw7AjlVZB2DHyqwDsGNF1gHYsTzrAOxYlnUAdizNOgA7lmQdgB2Lsw7AjkVZB2DHwqwDsGNB1gHYMT/rAOyYl3UAdszNOgA75mQdgB2zsw7AjllZB2DHzKwDsGNG1gHYMT3rAOyYlnUAdkzNOgA7pmQdgB2Tsw7AjklZB2DHxKwDsGNC1gHYMT7rAOwYl3UAdozNOgA7xmQdgB2jsw7AjlFZB2DHyKwDsGNE1gHYMTzrAOwYlnUAdgzNOgA7hmQdgB2Dsw7AjkFZB2DHwKwDsGNA1gHY0T/rAOzol3UAdvTNOgA7+mQdgB29sw7Ajl5ZB2BHz6wDsKNH1gHY0T3rAOzolnUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCffQMtMCUFz/ldWQAAAABJRU5ErkJggg==",
    nameLink: {
      firstName: "Jane",
      url: "https://www.linkedin.com/in/janesmith"
    },
    primaryDescription: " is a Full Stack Web Developer",
    workDescription1: "I build web applications using modern technologies.",
    workDescription2: "I love learning and solving problems with code.",
    linkTitleText: "Connect with me:",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/janesmith"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/janesmith"
    }
  });
});

app.listen(8080, () => console.log('Server running on http://localhost:8080'));