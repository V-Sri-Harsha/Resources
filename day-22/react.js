import React, { useState } from 'react'

const ItemsList = () => {
const [items, setItems] =useState([])

const addItemHandler = () => {
const newItem = {
id: items.length + 1,
name: Item - ${Math.floor(Math.random() * 10000)}
}
//console.log(newItem)

setItems([
    ...items,
    newItem
])


console.log(items)
}

return (
<div>
<ul>
{
items.map(item => <li key={item.id}>{item.name}</li>)
}
</ul>
<button onClick={addItemHandler}>Add an Item</button>
</div>
)
}

export default ItemsList

==== Conditional Rendering =====

you may often want to show or hide some JSX/HTML based on certain condition- there comes the role of conditional rendering

to show or hide JSX based on some condition
We have 4 different approaches and are follows

if/else
element variable
ternary conditional operator
short circuit operator
usecase: display message based on isLoggedIn (state/prop) - Welcome Jeffery / Welcome Guest

GreetUser.js  / WelcomeUser.js

App.js
<GreetUser isLoggedIn={true} username={Sanjay}/>

-> if...else statement wont work inside JSX, adding if..else statement inside JSX is not valid

==== Event Handling =====

Event Handling in Functional Component
Event Handling in Class Component
==== Styling React Components ======

CSS Style Sheets
Inline Styles
CSS Modules
CSS in Java Script Library etc
==== Form Handling =====
usecase: how to capture input from form elements like input tag, text area and also a drop-down list box(<select>

CustomerRegistration.js

Customer Name
Course Name
Comments
Self:   use modal in react (dialog)

==== Life cycle Methods =====

The React lifecycle refers to the different phases a component goes through during its time in a React application.

These phases allow you to run specific code at key moments in a component's life, such as when it's created, updated, or removed from the screen

When we create a react component - the component goes through several stages in its lifecycle

React provides us with built-in methods that we can override at particular stages in the lifecycle

We can mainly classify the lifecycle methods into 4 phases:

Mounting

Updating

Unmounting

Error Handling

Mounting lifecycle methods are called when an instance of a components is being created and inserted into DOM.
This phase occurs when a component is created and inserted into the DOM. It consists of the following lifecycle methods

(a) constructor(): - This method is called before the component is mounted, and it is used to initialize the state and bind event handlers.

(b) static getDerivedStateFromProps(): - This method is called right before rendering the element(s) in the DOM. It is used to update the state based on changes in props.

(c) render(): - This method is required and is responsible for rendering the UI. It returns the JSX that describes what should be displayed on the screen.

(d) componentDidMount(): - This method is called after the component is mounted. It is often used to perform side effects such as data fetching, setting up subscriptions, or manipulating DOM nodes.

Updating Phase
This phase occurs when a component's state or props change, causing the component to re-render

Unmounting Phase
This phase occurs when a component is removed from the DOM.



.App {
text-align: center;
}
a{
text-decoration: none;
color: #000000;
}

h1{
font-size: 24px;
text-align: center;
margin: 20px;
}

.header {
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
max-width: 1000px;
margin: auto;
border-bottom: 1px solid #d7d7d7;
font-size: 18px;
padding: 0px 10px;
background-color: #ffb4b4;
padding:14px 10px;
border-radius: 10px
}

img{
max-width: 80px;
border-radius:50%;
}

ul{
max-width: 600px;
margin: 50px auto;
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

li{
font: 16px;
list-style: none;
margin: 20px 5px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border-radius: 5px;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
}
button.delete{
border: 0px;
border-radius: 5px;
background-color: #be3434;
color: #FFFFFF;
padding: 5px 10px;
cursor: pointer;
}

li.completed{
box-shadow: 0px 0px 4px rgb(62, 150, 0) ;
}

li.incomplete{
box-shadow: rgba(135, 20, 0, 0.689) 0px 0px 4px;
}
button.trigger{
border: 0px;
border-radius: 5px;
background-color: #0F3460;
color: #FFFFFF;
padding: 5px 10px;
cursor: pointer;
}