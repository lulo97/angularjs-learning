from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Connect to SQLite database
conn = sqlite3.connect('example.db', check_same_thread=False)
c = conn.cursor()

# Create a table if it doesn't exist
c.execute('''CREATE TABLE IF NOT EXISTS users
             (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')
conn.commit()

# Pydantic model for User data
class User(BaseModel):
    name: str
    age: int

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow requests from all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Define endpoint to create a new user
@app.post('/users/')
def create_user(user: User):
    c.execute("INSERT INTO users (name, age) VALUES (?, ?)", (user.name, user.age))
    conn.commit()
    return {'message': 'User created successfully'}

# Define endpoint to get all users
@app.get('/users/')
def get_users():
    c.execute("SELECT * FROM users")
    users = c.fetchall()
    return users

# Define endpoint to get a specific user by ID
@app.get('/users/{user_id}')
def get_user(user_id: int):
    c.execute("SELECT * FROM users WHERE id=?", (user_id,))
    user = c.fetchone()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Define endpoint to update a user by ID
@app.put('/users/{user_id}')
def update_user(user_id: int, user: User):
    c.execute("UPDATE users SET name=?, age=? WHERE id=?", (user.name, user.age, user_id))
    conn.commit()
    return {'message': 'User updated successfully'}

# Define endpoint to delete a user by ID
@app.delete('/users/{user_id}')
def delete_user(user_id: int):
    c.execute("DELETE FROM users WHERE id=?", (user_id,))
    conn.commit()
    return {'message': 'User deleted successfully'}

# Define endpoint to get all users when hitting root URL
@app.get('/')
def get_root():
    return {"message": "Welcome to the User API. Use /users/ to get all users."}

# Run the application with uvicorn server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)