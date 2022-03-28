# [mst-ka.org](https://www.mst-ka.org) (Launched)

This repository serves as the source for the mst-ka.org website, as well
as the alumni portal. 
## How to Contribute

### Dependencies
___

#### Git 
* Install [Git](https://git-scm.com/downloads) on your machine. This is how you will interact with the repository (making code changes, pull requests, etc.)

* If you are unfamiliar with using the CLI (Command Line Interface) for Git, there are tools like [GitKracken](https://www.gitkraken.com/) that provide a Graphical User Interface (GUI) to make it a bit more user friendly.

* After you have installed Git, clone this repo.

#### Firebase/Node.js

* Install [node.js](https://nodejs.org/en/download/)

Node.js is a runtime for JavaScript that allows you to execute JavaScript outside of the browser. Included with node.js is a handy tool called node package manager (npm), which we will use to download the dependencies for this project!  

Ensure node.js and npm were installed correctly:
  ```
  $ node -v
  v16.13.0 (could be different depending on your node version)
  $ npm -v
  8.4.1 (could be different depending on your node version)
  ```

* Use node package manager to install [Firebase](firebase.google.com)

If you are unfamiliar with Google's Firebase platform take a look through their [documentation](https://firebase.google.com/docs). But to put it simply, it's what we use to host our website.
```
$ npm install -g firebase-tools
```
* Submit an issue on the repository (including your gmail), requesting to be 
    added to the firebase project. Assign the issue to [Joe Studer](https://github.com/joe-studer-18).

* Authorize your firebase account.
```
$ firebase login 
```

* Add the mst-ka-website project to firebase
```
$ firebase use --add (select mst-ka-website)
```

### Getting Started 
---
You'll want to ensure that you are able to run the website on your local machine.

* In the root directory of this repository run:
```
$ npm install
```
This will download the project dependencies via node package mananger.

* Next, to begin hosting the website locally:
```
$ npm run dev
```

* Navigate to [localhost:3000](http://localhost:3000/) and you should be seeing the website displayed. You can now start making changes and the locally hosted version of the website will automatically be updated with your changes.

### Recommended Practices
---
#### Branch Naming

All branches should be named using the following format: 

`<FirstInitialLastName/IssueName>` 

#### Making Changes
* Create a development branch of the repository
* In your new branch make whatever changes you wish.
* Test your changes in your locally hosted version of the website.
* Generate a build:
```
npm run build
```
* Deploy your build:  

```
firebase deploy --only hosting:devel
```
* Create a PR with the changes.

* Send a message in the group chat that your changes are live on [devel-mst-ka.web.app](devel-mst-ka.web.app)

For more info on different deploy targets, check out [this article](https://firebase.google.com/docs/cli/targets).



#### firebase-init.js

The firebase-init.js file is important for any work that interacts with the Firebase API,
our database, or any server side actions. However, since it includes the API Key, we 
don't store it in Git. This means there's a couple steps you'll have to follow
if you wan't/need to do this kind of development:

* Navigate to the root of the project directory and create a firebase-init.js file.
* Go to the [Firebase Console](https://console.firebase.google.com/u/0/) > mst-ka > Project Settings (Gear Icon) > SDK setup and configuration > Config
* Copy the config into your newly created firebase-init.js file.
### Making your first Pull Request
---
* Create a development branch of the repository
* In your new branch, edit the firebase.json file, add your name and email to the contributors section.
* Commit and push the changes to your branch 
* Submit a Pull Request.
* Send a message in the group chat that you have an active pull request that needs to be reviewed.

Congratulations! You are now ready to begin contributing to the mst-ka.org website. Take a look through our [open issues](https://github.com/joe-studer-18/mst-ka-site/issues) and go ahead an assign yourself one or send a message in the group chant and I'm sure we will be able to find you something to work on!
## Project Overview
---
In this project we are utilizing a [React](https://reactjs.org/) framework, [Next.js](https://nextjs.org/) and a React Component Library, [MUI v5 (Material UI)](https://mui.com/) for easier styling. If you are unfamiliar with React, Next.js, or MUI take a look at their respective docs, or you can follow some tutorials; below are a couple recommendations. They are fairly long but have a lot of fundamentals that will aid you as you develop a React based application.

* [React Tutorial](https://www.youtube.com/watch?v=Dorf8i6lCuk&t=6s&ab_channel=Academind)
* [Next.js Tutorial](https://www.youtube.com/watch?v=MFuwkrseXVE&t=3804s&ab_channel=Academind)
* [Material UI Docs](https://mui.com/getting-started/usage/)

It may also be worth your time looking into some Vanilla HTML/CSS/JavaScript tutorials if you would like.

### Folder Structure (Opinionated, except for ***pages/***)
---
#### *components/*
In this folder you will store all the components that you create for constructing the UI on each of the ***pages/***.

#### *pages/*
The *pages/* directory is some Next.js magic that automatically handles all the routing for our application. In each of these 'page' files is where you constuct the contents of each page of the appication. Read more in the Next.js docs [HERE](https://nextjs.org/docs/basic-features/pages). 

#### *public/*
Any static files that need to be included for the application (images, text files, etc).  

#### *utils/*
Catch all for JavaScript functions/files that need to be used throughout the application.

### Material UI & Styling
---

### The Layout component
---
### Linting
---
If you're a fan of Visual Studio Code, you can download the Extension: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) which will help you format your code in a 'properly' opinionated way. If you use a different editor, just try to make it look nice for now. We will be looking to install prettier within the project itself in the future.


### Image Extensions
---

#### .jpg 

Use .jpg files for any regular images (people, landscapes, etc).

#### .svg

Use .svg for any computer graphic files where we have an svg, but don't go digging trying to 
convert icons to svg unless you're good with illustrator/other vector editors.

#### .png

Use .png for any computer graphic we have that it wouldn't be reasonable to make
a .svg for.

### Contact Us Email (***Contact page not Refactored yet***)
---
The contact us page uses a free email from [Zoho Mail](mail.zoho.com). Once added
to the firebase account, you can access the user & pass with:

```
$ firebase functions:config:get mail
```
