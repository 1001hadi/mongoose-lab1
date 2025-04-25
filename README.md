# Steps to Setup an Express/Mongoose Server

## 1st: create server.mjs

execute: npm init -y (to create package.json)
execute: npm i express dotenv mongoose
edit package.json to correct files/commands (ie. nodemon server.mjs)
create: .gitignore & .env
ignore both: node_modules/ & .env
populate .env w/ PORT & mongoURI (same as mongodb driver str, to specify DB add it to the end of connection string)
setup server.js boilerplate
setup DB connection

## 2nd: DB Connection

#

import: mongoose & dotenv
setup dotenv and connStr in variable
create async connection function with try/catch
await mongoose.connect(connectionStr)
export function

## 3rd: Schema Creation

#

import: mongoose
const newSchema = new mongoose.Schema({});
export default mongoose.model('CollectionName', newSchema);
populate schema info

## 4th: make the Routes
