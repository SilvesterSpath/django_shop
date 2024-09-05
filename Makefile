.PHONY: backend frontend start-all

# Detect Python command
PYTHON_CMD := $(shell command -v python3 || command -v python)

backend:
	cd backend && $(PYTHON_CMD) manage.py runserver

frontend:
	cd frontend && npm start

start-all: backend frontend