# Snacks World - React Front End 
## Description
A place to share different tastes of the world! 
## Check it out! 
[link here](https://snack-world-react-front.herokuapp.com/home)

## DIRECTORY

## FEATURES
## TECHNOLOGIES USED
- **React - frontend** 

- **Django - backend** 



## HOW TO USE 
```
code blocks for commands
```
### User Stories
## GOAL
## PROBLEM SOLVED 
## LEARNED
Monday - connected backend to heroku
Tuesday - implemented scss, class based components, CRUD
Wednesday - stuck on heroku deploy for backend, tried to hide secret key as a dotenv. needed to add it to requirements.txt. Now it is showing a different database for localhost and heroku... how to merge both? 
Thursday - fix up to do list, try MODAL, fix up update, add data, try new features..
Friday - API? 
Weekend - style and css 
## Routing Table

| **URL**     | **HTTP Verb** | **Description** |
| ----------- | ------------- | ---------------- |
| /sign-up | POST | Sign up a new user |
| /sign-in | POST | User sign in |
| /sign-out | DELETE | User sign out |
| /change-password | PATCH | User change password |
| /snacks | POST | Add snacks to signed-in user's account |
| /lsnacks | GET | View snacks of signed-in user |
| /snacks/<str:email> | GET | View snacks of any user |
| /snacks/modify/<int:pk> | DELETE | Delete snacks of signed-in user |
| /snacks/modify/<int:pk> | PUT | Update snacks of signed-in user |

## Functional Components 

| Component                      |                   Description                    |
| ------------------------------ | :----------------------------------------------: |
| Home | Landing Page for a signed-in user, can submit/edit their top5 |
| SignUp | Page to signup a new user |
| SignIn |  Page to signin a user  |
| AddForm |  Component that holds the form to add snacks |
| UpdateForm |  Component that holds the form to update snacks |
| Search | Page with a searchbox and then will search by flavor, category, country, state |
| About | About the site and creator |
| FAQ | Frequently asked questions |
| Header | Logo and Menu |

# FUTURE FEATURES



SNACKS 
- find snacks 
- SORT BY CATEGORY (CHIPS, CRACKERS, BAKED GOODS, ETC)
- Rate and reviews
- Blog/Question/answer forum
- Be able to sell it
- BASED ON LOCATION
- Add as part of TO DO LIST
- Social Media API 

- GROUPS
- SEARCH FUNCTION

https://www.worldofsnacks.com/store/c52/Thai_Snacks.html
SnackWorld - introduce snacks from worldwide 
- Show snacks by category and location 

