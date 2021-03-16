# TeaCode React.js Recruitment Challenge
## Overview:
Develop a single webpage that displays a list of contacts.
## Tech stack:
The only tech requirement is to use **React.js**.
## Specifications
1. Under this endpoint
(https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json)
you will receive a JSON object with an array of contacts. Example Response:
```
[
  {
    id: 1,
    first_name: 'Jack',
    last_name: ‘Wick’,
    email: ‘jack@wick.com’,
    gender: ‘Male
    avatar: 'https://....'
  },
  ....
]
```
You should not import the data into your project, but run a request for it in the
application in the browser.

2. The list of contacts should be sorted alphabetically by last_name.
3. The page should display a list of contacts in the following format:
{avatar} | {first_name last_name} | {checkbox}
4. When a user clicks on a contact (list item) the checkbox should toggle on/off and you
should console.log IDs of all selected contacts.
5. Add one text input at the top of the list that allows you to filter the contacts by
first_name and last_name. Searching should not cause contacts to become
unchecked.

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## See live

https://uigy.github.io/teacode/
