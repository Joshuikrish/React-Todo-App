# React Todo App

![React](https://img.shields.io/badge/React-v18.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Introduction
React Todo App is a simple and intuitive todo list application built using React.js. It allows users to add, update, and delete tasks with ease. The app features dynamic elements such as a customizable navbar, document title, logo, and footer, all designed to offer a user-friendly experience.

**Features**:
- **Dynamic Document Title**: Automatically updates the browser title based on the app name.
- **Customizable Navbar**: Easily manage navigation items and app name.
- **Text Logo Integration**: Add and display app Text logo in the navbar.
- **Footer**: Display copyright information and additional footer items.
- **Task Management**: Add, update, and remove tasks effortlessly.

## Features
- **Navbar Customization**: Set and update navbar items and app name dynamically.
- **Document Title**: Reflects the app name in the browser’s title tag for better user navigation.
- **Text Logo**: Integrate a simple text logo in the navbar.
- **Footer**: Easily set the footer with customizable content such as copyright information.

## Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v8 or higher)

## Getting Started
Follow these steps to set up and run the project.

### Clone the repository
```bash
git clone https://github.com/Joshuikrish/React-Todo-App
cd React-Todo-App
```

### Install dependencies
```bash
npm install
```

### Run the Application

Start the server:

```bash
npm start
```

### Folder Structure
The following is the folder structure for the **React Todo App**:

```bash
react-todo-app/
├── src/                  # Source code
│   ├── components/       # Reusable components like Navbar, Footer, etc.
│   │   ├── Header.js     # Header component
│   │   ├── Body.js       # Body component
│   │   ├── Footer.js     # Footer component
│   │   └── TodoList.js   # Todo list component
│   │   └── TodoForm.js   # Todo Form component
│   │   └── TodoTable.js  # Todo Table component
│   ├── App.js            # Main App component
│   ├── App.css           # Styles for the app
│   ├── index.js          # Entry point for the React application
│   └── logo.png          # Logo image for the app (optional)
├── public/               # Public files
│   ├── index.html        # HTML template where React app mounts
│   └── favicon.ico       # Favicon for the app (optional)
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
└── .gitignore            # Git ignore file

```

### License
This project is licensed under the MIT License. See LICENSE for details.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements.