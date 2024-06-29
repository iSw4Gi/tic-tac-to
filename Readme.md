# Tic-Tac-Toe iSw4Gi

Tic-Tac-Toe iSw4Gi is an educational game designed to teach basic programming skills in Python through a fun and engaging Tic-Tac-Toe game. The game features a web-based platform with both frontend and backend components.

## Features

- **Enhanced Gameplay Mechanics**: Interactive Tic-Tac-Toe gameplay with coding challenges.
- **Comprehensive Learning Objectives**: Covers fundamental, intermediate, and advanced programming concepts.
- **In-Depth Rewards and Progression System**: Earn experience points, levels, and skill trees.
- **Support and Resources**: Access to Python documentation, tutorials, and example code.

## System Architecture

### Overview

The system architecture of Tic-Tac-Toe consists of two main components: the frontend and the backend.

### Frontend

- **HTML/CSS/JavaScript**: The frontend is built using HTML, CSS, and JavaScript. It provides the user interface for the game, including the Tic-Tac-Toe board, buttons, and interactive elements.
- **Responsive Design**: Ensures the game is playable on various devices, including desktops, tablets, and mobile phones.

### Backend

- **Python/Flask**: The backend is developed using Python with the Flask framework. It handles game logic, state management, and communication between the client and server.

### Data Flow

1. **User Interaction**: The user interacts with the frontend by clicking on the Tic-Tac-Toe board and buttons.
2. **API Request**: The frontend sends an HTTP request to the backend API endpoint (e.g., `/move` or `/reset`).
3. **Game Logic**: The backend processes the request, updates the game state, and checks for a winner or draw.
4. **API Response**: The backend sends an HTTP response back to the frontend with the result (e.g., game continues, player wins, or cell already taken).
5. **UI Update**: The frontend updates the user interface based on the response from the backend.

### Architecture Diagram
```sql
+---------------------+          +-------------------+
|   Frontend (HTML,   |  HTTP    |   Backend (Python,|
|   CSS, JavaScript)  +--------->|   Flask)          |
|                     |  API     |                   |
|   - User Interface  | Request  |   - Game Logic    |
|   - Responsive      |--------->|   - State         |
|     Design          |          |     Management    |
+---------------------+          +-------------------+
         ^                                |
         |                                |
         |          HTTP Response          |
         +---------------------------------+
```


## Getting Started

### Prerequisites

- Python 3.7+
- Flask

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iSw4Gi/tic-tac-toe.git
   cd tic-tac-toe-code-masters
Install dependencies:
bash
Copy code
pip install flask
Running the Application
Start the Flask server:

bash
Copy code
python app.py
Open a web browser and navigate to:

arduino
Copy code
http://127.0.0.1:5000
Usage
Click on the Tic-Tac-Toe board to make a move.
Use the "Reset Game" button to start a new game.