# Medical Waiting List Simulation

This JavaScript application simulates a waiting list in a medical office. It allows users to manage a list of patients by adding new patients to the end of the queue, consulting (removing) the first patient in the queue, or exiting the program. The application provides an interactive menu for these operations.

## Features

- **View Waiting List:** Displays the current list of patients with their positions in the queue.
- **Add New Patient:** Allows users to add a new patient to the end of the queue.
- **Consult (Remove) Patient:** Removes the first patient from the queue and displays their name.
- **Exit Program:** Ends the program when the user chooses to exit.
- **Handle Invalid Input:** Alerts the user if an invalid option is selected.

## How to Run

To run this JavaScript exercise, follow these steps:

1. **Save the JavaScript Code:**
   - Copy the JavaScript code into a file named `index.js`.

2. **Create an HTML File:**
   - Create an `index.html` file and include the JavaScript file within a `<script>` tag:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Medical Waiting List</title>
   </head>
   <body>
       <script src="waitingList.js"></script>
   </body>
   </html>
