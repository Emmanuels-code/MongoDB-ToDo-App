#!/bin/bash

# MongoDB connection details
MONGO_URI="mongodb+srv://emmaokogho:Poul%21%40%23%24%252@mongodb-practice.rs0jz.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB-Practice"
DB_NAME="MongoDB-Practice"
COLLECTION="users"

# Users to be inserted
users=(
  '{"username": "Emmanuel", "email": "emmanuel@example.com", "password": "password123"}'
  '{"username": "John", "email": "john@example.com", "password": "password123"}'
  '{"username": "Marie", "email": "marie@example.com", "password": "password123"}'
  '{"username": "Peter", "email": "peter@example.com", "password": "password123"}'
  '{"username": "Anna", "email": "anna@example.com", "password": "password123"}'
  '{"username": "Michael", "email": "michael@example.com", "password": "password123"}'
  '{"username": "Sophia", "email": "sophia@example.com", "password": "password123"}'
  '{"username": "David", "email": "david@example.com", "password": "password123"}'
  '{"username": "Elizabeth", "email": "elizabeth@example.com", "password": "password123"}'
)

# Iterate over the array of users and insert each one
for user in "${users[@]}"; do
  mongo "$MONGO_URI/$DB_NAME" --eval "db.$COLLECTION.insertOne($user)"
done

echo "Users populated successfully!"
