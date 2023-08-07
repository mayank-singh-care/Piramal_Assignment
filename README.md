# Project Documentation - PIRAMAL Assignment

## Table of Contents

1. Introduction
   - Purpose
   - Scope
   - Technology Stack

2. Figma Design
   - Overview
   - UI Elements
   - Responsiveness

3. Implementation Steps
   - Setting Up the Project
   - HTML Structure
   - CSS Styling
   - JavaScript Functionality
   - Google Sheets Integration
   - API Integration

4. Challenges Faced
   - Challenge 1
   - Challenge 2
   - Challenge N

5. Conclusion

---

## 1. Introduction

### Purpose

The purpose of this project is to develop a responsive web application for PIRAMAL, replicating the provided UI design from Figma. The application allows users to submit contact data through a form and implements two functionalities: sending the data to Google Sheets and sending data to a specific API using a POST request.

### Scope

The project's scope includes building the user interface using HTML, CSS, and JavaScript, setting up Google Sheets to receive and store contact form submissions, and integrating the API to handle contact data.

### Technology Stack

The technology stack used for this project includes:

- HTML
- CSS
- JavaScript
- Google Sheets API
- Specific API endpoint (for POST request)

---

## 2. Figma Design

### Overview

The Figma design provided serves as the basis for the user interface of the web application. It includes various sections, elements, and styles that need to be replicated in the final project.

### UI Elements

The design elements, such as headings, buttons, form fields, and background images, were carefully matched with the Figma design to ensure visual consistency.

The UI elements present in the Figma design include:

- Navigation Bar
- Hero Section
- Search Bar
- Sections (About, Services, Advantages, Location)
- Contact Form
- Footer
- Various buttons, labels, and input fields

### Responsiveness

The design should be made fully responsive to ensure optimal user experience across different devices, such as desktops, tablets, and mobile phones.

---

## 3. Implementation Steps

### Setting Up the Project

1. Create a new project directory.
2. Set up the necessary files and folders (e.g., index.html, index.css, index.js).
3. Initialize Git repository.

### HTML Structure

1. Create the basic HTML structure.
2. Implement the navigation bar, hero section, many intermediate sections, contact form, and footer as per the Figma design.

### CSS Styling

1. Style the navigation bar, hero section/s, contact form, and footer elements to match the Figma design.
2. Ensure responsiveness by using media queries and flexbox/grid layout.

### JavaScript Functionality

1. Implement JavaScript functions to handle form submissions.
2. Validate form input fields.
3. On form submission, gather the form data and prepare the payload for Google Sheets and API integration.

### Google Sheets Integration

1. Set up a Google Sheet to receive contact form submissions.
2. Enable the Google Sheets API and obtain API credentials.
3. Implement JavaScript code to send data to Google Sheets using the API credentials and fetch API.

### API Integration

1. Use the provided API endpoint and HTTP method (POST) to send contact form data to the specific API.
2. Include the required payload in the request body with actual data collected from the contact form.

---

## 4. Challenges Faced

### Handling API Responses and Errors

When sending data to the API and Google Sheets, it was essential to handle the responses and errors appropriately. We needed to ensure that the data was successfully sent and received the desired responses from the server. Error handling was crucial to provide meaningful feedback to users in case of submission failures.


---

## 5. Conclusion

In conclusion, the PIRAMAL Assignment was successfully completed by developing a responsive web application based on the provided Figma design. The application allows users to submit contact data through a form, with the data being sent to Google Sheets and a specific API using a POST request. The project showcases the implementation of various technologies, including HTML, CSS, JavaScript, Google Sheets API, and API integration, and the ability to overcome challenges during development.

The final application is a fully functional and user-friendly solution that meets the requirements of the assignment and provides seamless contact form submissions for the users and deploys to Netlify - https://piramal-assignment.netlify.app/.
