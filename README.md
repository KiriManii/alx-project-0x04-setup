alx-project-0x04-setup
This repository contains the code for the ALX Frontend ProDev project, demonstrating different approaches to state management in React (using Next.js). The project evolves from basic useState to more advanced solutions like Context API and Redux Toolkit.

Project Structure 📁
The repository is organized into separate directories for each state management approach, built incrementally:

alx-project-0x04/: Demonstrates basic local state management using React's useState hook.

alx-project-0x05/: Implements global state management using React's Context API, showcasing state sharing between components.

alx-project-0x06/: Integrates Redux Toolkit for robust global state management, suitable for larger applications.

Getting Started 🚀
To run any of the project versions, follow these steps:

Clone the repository (if you haven't already):

git clone https://github.com/KiriManii/alx-project-0x04-setup.git

Navigate into the repository's root directory:

cd alx-project-0x04-setup

Running the useState Version (alx-project-0x04)
Navigate into the project directory:

cd alx-project-0x04

Install dependencies (run only once per project version):

npm install

Run the development server:

npm run dev -- -p 3000

Open your browser and visit http://localhost:3000. Click "Go to Counter App (useState)".

Running the Context API Version (alx-project-0x05)
Navigate into the project directory:

cd alx-project-0x05

Install dependencies (run only once per project version):

npm install

Run the development server:

npm run dev -- -p 3000

Open your browser and visit http://localhost:3000. Click "Go to Counter App (useState)" (the link remains the same, but the underlying implementation uses Context API). Observe the header count updating.

Running the Redux Version (alx-project-0x06)
Navigate into the project directory:

cd alx-project-0x06

Install dependencies (run only once per project version):

npm install

Run the development server:

npm run dev -- -p 3000

Open your browser and visit http://localhost:3000. Click "Go to Counter App (useState)" (the link remains the same, but the underlying implementation uses Redux). Observe the header count updating.