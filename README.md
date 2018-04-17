# g76 Q3 Assessment - Book Inventory App

## Getting Started

- Fork and clone this repo
- Install the depenedencies with `npm install` or `yarn`
- Inside of your `collective-api` directory, run `git pull origin master`, then start the server
- Verify you get a response with a GET request to [http://localhost:8082/api/books](http://localhost:8082/api/books)

## Overview

You are a small bookstore owner and you have recently been aquiring books faster than you can track and it's getting to you. It doesn't have to be anything full-featured, but it has to be able to:

- Add a new book
- Remove a book
- Mark a book as unsold/sold

The owner is giving you a lot of freedom as to how it is designed, but here are a few guidelines to give you some direction. There must be a:

- Navigation Bar (No need for links, since there is no routing, at this point)
- Main content area
  - Display all of the data in a table and have a column at the end that contain links and/or buttons to "manage" them
- Simple footer

### Stretch Goals

- Filter the books that are shown, either by title and/or whether they are sold or unsold
- Update book details (route still under construction)
- Add routing using React Router and create a simple login page that will take anything as an email/password and redirect you from `/login` to `/main`
# q3_assessment
