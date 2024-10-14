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
if [ "$1" = "back" ]; then
    run_django
elif [ "$1" = "front" ]; then
    run_react
else
    echo "Usage: $0 [back|front]"
    exit 1
fi