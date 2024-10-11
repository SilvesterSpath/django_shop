#!/bin/bash

# Function to run Django server
run_django() {
    cd backend
    python manage.py runserver
}

# Function to run React frontend
run_react() {
    cd frontend
    npm start
}

# Check the argument and run the appropriate function
if [ "$1" = "backend" ]; then
    run_django
elif [ "$1" = "frontend" ]; then
    run_react
else
    echo "Usage: $0 [django|react]"
    exit 1
fi