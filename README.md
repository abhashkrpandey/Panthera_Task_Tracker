# Task_Tracker
A task_tracker to monitor daily tasks

<h2>Functionalities:</h2>
<ol>
  <li>Add a new task</li>
  <li>Edit the existing task</li>
  <li>Delete a existing task</li>
</ol>

#  Live Link
https://panthera-task-tracker.onrender.com/


<h2>File Structure:</h2>
<pre>
  
├── src/
     ├── assets ---- contains image icon for the webapp
     |
     ├──components/ 
     |          ├── TaskForm.jsx -- Form to collect info about task
     |          ├── TaskItem.jsx -- Each Item/Task 
     |          ├── TaskList.jsx -- Returns a list of tasks
     | 
     ├──pages/
     |       ├──Home.jsx -- Home Page of Webapp
     |
     ├── services/
     |           ├── TaskServices.jsx -- contains all functions for editing/adding/deleting tasks
     ├──utils/
     |       ├── Functions.jsx -- contains other functions 
     └── public/
</pre>

<h2>Installation</h2>
<ol>
<li>Clone this repo</li>
  
```bash
 git clone https://github.com/abhashkrpandey/Panthera_Task_Tracker.git
 cd Panthera_Task_Tracker
 npm install
```
</ol>



<h2>Usage</h2>
<ol>
  <li>To run application locally</li>

```bash
 npm run dev
```
</ol>


