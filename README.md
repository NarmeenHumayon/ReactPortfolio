# Airbnb clone

This project is a clone of airbnb web app, but better. Following is the structure of this project.

## Structure

### Frontend

The base directory has the UI and the server directory is nested inside it.

#### Pages

- main page (App.jsx)
- admin page (Admin.jsx)

#### Components

- Navbar (components/navbar/NavBar.jsx)
  - SearchBar (SearchBar/SearchBar.jsx)
  - Categories (Categories/Categories.jsx)
    - CategorieButton (CategorieButton.jsx)
- Listing card (components/Card/Card.jsx)
- Footer (components/Footer/Footer.jsx)

### Backend

#### Database Models

- category
  - category_name String not null
  - category_img_path String not null
- item
  - name: String not null,
  - desc: String not null,
  - price: String not null,
  - rating: Number not null,
  - type: String not null,
  - cat_id: String not null,
  - imgsrc: String not null

#### Endpoints

- GET `/category`
  - get all the categories
- POST `/category`
  - create new categories
- GET `/item`
  - get all the listing items
  - accepts query cat_id to return items of specific category
- POST `/item`
  - create new listing item

## How to set up

### Setting up the server

Before we run the frontent we have get the server up and running.

- open terminal where you have cloned this project
- go to server directory
- run `npm install`
- create a .env file in this folder
- inside .env create CONNECTION_STRING variable
- store your mongodb connection string in it
- run `npm start` to start the server

### Setting up the frontend

Now its time to run the UI

- go to root directory
- run `npm install`
- run `npm run dev`

### Adding items

you can either add your own items from the admin panel `base_url/admin`, or download dummy data from ...(I'll give the link later)

## About the Backend

The backend is currently really sloppy, I aim to add multiple categories & images per listing item and make the structure of our db a bit better specially the way uploads are stored in the future.
