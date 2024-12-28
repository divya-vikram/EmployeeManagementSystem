
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstname": "Aarav",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "taskCompleted": 1,
      "failedTask": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create and design the homepage for the new website.",
        "taskDate": "2023-12-20",
        "taskCategory": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Fix Bugs",
        "taskDescription": "Identify and fix bugs reported by users.",
        "taskDate": "2023-12-21",
        "taskCategory": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": true,
        "failedTask": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the project documentation with the latest changes.",
        "taskDate": "2023-12-22",
        "taskCategory": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Vivaan",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "taskCompleted": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Implement Authentication",
        "taskDescription": "Implement user authentication for the app.",
        "taskDate": "2023-12-20",
        "taskCategory": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": true,
        "failedTask": false,
        "taskTitle": "Create Marketing Plan",
        "taskDescription": "Develop a marketing plan for the upcoming product launch.",
        "taskDate": "2023-12-21",
        "taskCategory": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": true,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform server maintenance and updates.",
        "taskDate": "2023-12-22",
        "taskCategory": "Maintenance"
      },
      {
        "active": true,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "User Feedback Analysis",
        "taskDescription": "Analyze user feedback and create a report.",
        "taskDate": "2023-12-23",
        "taskCategory": "Analysis"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Vihaan",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "taskCompleted": 2,
      "failedTask": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for better performance.",
        "taskDate": "2023-12-20",
        "taskCategory": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Feature Development",
        "taskDescription": "Develop new features for the application.",
        "taskDate": "2023-12-21",
        "taskCategory": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": true,
        "failedTask": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review code submitted by team members.",
        "taskDate": "2023-12-22",
        "taskCategory": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": true,
        "failedTask": false,
        "taskTitle": "Testing Phase",
        "taskDescription": "Execute the test cases for the application.",
        "taskDate": "2023-12-23",
        "taskCategory": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": true,
        "taskTitle": "Load Testing",
        "taskDescription": "Perform load testing on the application.",
        "taskDate": "2023-12-24",
        "taskCategory": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Reyansh",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "taskCompleted": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend a meeting with the client to discuss project requirements.",
        "taskDate": "2023-12-20",
        "taskCategory": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": true,
        "failedTask": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Prepare a presentation for the client review meeting.",
        "taskDate": "2023-12-21",
        "taskCategory": "Preparation"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": true,
        "taskTitle": "System Upgrade",
        "taskDescription": "Upgrade the existing system to the latest version.",
        "taskDate": "2023-12-22",
        "taskCategory": "Upgrade"
      },
      {
        "active": true,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Documentation Update",
        "taskDescription": "Update project documentation with recent changes.",
        "taskDate": "2023-12-23",
        "taskCategory": "Documentation"
      },
      {
        "active": false,
        "newTask": true,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Perform server maintenance and updates.",
        "taskDate": "2023-12-24",
        "taskCategory": "Maintenance"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Ayaan",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "taskCompleted": 1,
      "failedTask": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Write Test Cases",
        "taskDescription": "Write and execute test cases for the new features.",
        "taskDate": "2023-12-20",
        "taskCategory": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": true,
        "failedTask": false,
        "taskTitle": "Deploy Application",
        "taskDescription": "Deploy the application to the staging environment.",
        "taskDate": "2023-12-21",
        "taskCategory": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "taskCompleted": false,
        "failedTask": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Identify and fix bugs reported during testing.",
        "taskDate": "2023-12-22",
        "taskCategory": "Development"
      }
    ]
  }
  
];

  
const admin = [{
  "id": 6,
  "email": "admin@example.com",
  "password": "123",
  "firstname": "Krish",
  "role": "admin"
}  ];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}