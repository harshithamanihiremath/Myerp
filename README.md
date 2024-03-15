# Myerp
# Getting Started with ERP-System 

This project was bootstrapped with [ERP_System](https://github.com/harshithahiremath/ERP-System).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Create a project

Creating an App
You’ll need to have Node 14.0.0 or later version on your local development machine (but it’s not required on the server). We recommend using the latest LTS version. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

# To create a new app, you may choose one of the following methods:
### `npx`
### `npx create-react-erpapp`
(npx is a package runner tool that comes with npm 5.2+ and higher, see instructions for older npm versions)

### `npm`
### `npm init react-app erpapp`
npm init <initializer> is available in npm 6+


It will create a directory called erpapp inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:
![flow](https://github.com/harshithahiremath/ERP-System/assets/112157894/175e12a0-bcc3-4d20-b6e1-422769bddb0a)


No configuration or complicated folder structures, only the files you need to build your app.
Once the installation is done, you can open your project folder:

## `cd erpapp`
Inside the newly created project, you can run some built-in commands:

## `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

Build errors

### `npm test` 
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.
# Project Outcome Demonstration
# Dashboard
IN the top section of the page features a navigation link, it contains 3 buttons for easy access and key features.
![dashboard](https://github.com/harshithahiremath/ERP-System/assets/112157894/adb74606-08b1-4354-90fa-512b5e456073)
# ADD Products
We can add as many products as we want and then simply click on the "Add" button to save them in the table above.
![products](https://github.com/harshithahiremath/ERP-System/assets/112157894/ecba1c56-afae-40ac-835c-65e314cf7077)
# Edit Products
To make changes to a product, simply click on the edit button next to the product. This will allow you to modify any necessary fields.
Once you have made the desired changes, click on the save button to confirm and save your edits.
![edit](https://github.com/harshithahiremath/ERP-System/assets/112157894/ca425dc8-c299-4255-9f92-838176ee64be)
# Orders
In this table, we have columns for order ID, customer name, date, and action. The action column contains three buttons - Ship, Deliver, and Delete.
You can update the status of an order by clicking on one of these buttons.
![orders](https://github.com/harshithahiremath/ERP-System/assets/112157894/c03800bf-f5fa-4286-8a08-246aa50e4590)
# CalendarView, 
It shows overview of order deliveries by date, with the ability to click on a specific date to see the status of each individual order. 
The color of the status could change to indicate whether the order has been delivered, is shipped, or ordered. This visual representation would make it easier for users to track and manage their orders.
![calendar](https://github.com/harshithahiremath/ERP-System/assets/112157894/72804b6a-cde0-4b5d-9d08-3d9400cb9002)
