from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Initialize the Tic-Tac-Toe board and variables
board = [[" " for _ in range(3)] for _ in range(3)]
current_player = 'X'  # Start with player X

def print_board():
    for row in board:
        print(" | ".join(row))
        print("-" * 5)

def check_winner():
    # Check rows
    for row in board:
        if row[0] == row[1] == row[2] and row[0] != " ":
            return row[0]
    # Check columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != " ":
            return board[0][col]
    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != " ":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != " ":
        return board[0][2]
    return None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/move', methods=['POST'])
def move():
    global current_player
    data = request.json
    row = int(data['row'])
    col = int(data['col'])
    player = current_player

    if board[row][col] == " ":
        board[row][col] = player
        winner = check_winner()
        if winner:
            return jsonify({'status': 'win', 'winner': winner})
        # Toggle between players (X and O)
        current_player = 'O' if current_player == 'X' else 'X'
        return jsonify({'status': 'continue', 'player': current_player})
    return jsonify({'status': 'taken'})

@app.route('/reset', methods=['POST'])
def reset():
    global board, current_player
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = 'X'  # Reset current player to X
    return jsonify({'status': 'reset'})

if __name__ == '__main__':
    app.run(debug=True)
