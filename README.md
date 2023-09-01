# Free-To-Play Game App

This document will provide you with an overview of the app and guide you through the process of setting it up and starting it.

**About the App** 
My app is an interface for a Free-To-Play Games site. It provides users with access to a wide range of free-to-play games. The app consists of two pages: the home page and the page with game description. The home page displays a list of available games, while the game description page provides detailed information about each game.

The app is built using React, Redux Toolkit and utilizes the Ant Design framework, which offers a set of pre-designed UI components and styling options.

# Getting Started
To start using the app, follow the steps below:
1.  **Get the RapidAPI Key:** 
	Visit the [Free-To-Play Games Database](https://rapidapi.com/digiwalls/api/free-to-play-games-database) on RapidAPI's website. Sign up for an account if needed, and obtain the 'X-RapidAPI-Key' key. This key is required to access the API.
2. **Add the Access Key to the .env file:**
	Open the `.env` file in the root of the project and replace `YOUR_RAPIDAPI_KEY` with the key you obtained from the RapidAPI website.
```cpp
REACT_APP_ACCESS_KEY="YOUR_RAPIDAPI_KEY"
```
## Installation
To install the app and its dependencies, follow the steps below:
1.  **Clone the repository:** 
	Start by cloning the repository to your local machine using the following command:
	```cpp
	git clone https://github.com/helga-umrikh/Free-To-Play-Games.git
	```
2.  **Navigate to the project directory:**
	Once the repository is cloned, navigate to the project directory using the following command:
	```cpp
	cd Free-To-Play-Games
	```
3. **Install dependencies:**
	Before running the app install the package manager npm to install all the dependencies. 
	```cpp
	npm install
	```
	
## Starting the App

To start the app, run the following command:
```cpp
npm start
```
This will start the development server and open the app in your default web browser. You should now be able to navigate to the home page and explore the free-to-play games available on the site.
