# 🌐 Personal Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-badge-id/deploy-status)](https://bodan4-portfolio.netlify.app)
[![Render Backend](https://img.shields.io/badge/Render-Backend-blue)](https://email-lpji.onrender.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern and responsive personal portfolio website built using HTML, CSS, and JavaScript for the frontend, and Node.js for the backend. It features a fully functional contact form that sends messages directly to your inbox using Nodemailer and Gmail SMTP. The backend is deployed on Render, while the frontend is hosted on Netlify.

## 🔗 Live Demo

- **Frontend (Netlify):** [https://your-portfolio.netlify.app](https://bogdanwebdev.netlify.app/))
- **Backend (Render):** [https://email-lpji.onrender.com](https://email-lpji.onrender.com)


## 📁 Project Structure


## 📨 Contact Form Flow
├── public/ # Static assets (HTML, CSS, JS) │ ├── index.html │ ├── styles.css │ └── script.js ├── server.js # Node.js backend using Express ├── .env # Environment variables (e.g., email credentials) ├── package.json # Node dependencies and scripts └── README.md
---

## 📨 Contact Form Flow

1. The user enters their name, email, and message in the contact form.
2. Upon submission, the frontend sends a `POST` request to the backend endpoint:  
   `https://email-lpji.onrender.com/send`
3. The backend receives the request and uses Nodemailer to send the message via Gmail SMTP to the configured recipient.
4. The user receives a confirmation alert or error message based on the response.
---

## ⚙️ Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/bodan4/portfolio.git
cd portfolio
```
### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file in the root directory

```bash
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-app-password
```
### 4. Start the backend server
```bash
node server.js
```

🚀 Deployment
Frontend: Deployed to Netlify via GitHub integration.

Backend: Deployed to Render as a web service.

🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript (Vanilla)

Backend: Node.js, Express.js, Nodemailer

Deployment: Netlify (frontend), Render (backend)
