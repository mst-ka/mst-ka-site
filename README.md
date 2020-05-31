# mst-ka.org

This repository serves as the source for the mst-ka.org website, as well
as the alumni portal. 

## Status: WIP
## Contributing

### Git
#### Git Cli

Option A is to interact with Git on the cmd line. Only do this if you are
already familiar with Git & Terminal commands.

#### Gitkraken

  - Download [gitkraken](https://www.gitkraken.com/) & use this to interact w/ git
  - Potentially look in to their getting started guide, then fork the website's repo

### Firebase

  1. Install Node.js
  ```
  $ sudo apt-get install npm 
  ```

  2. Use the node package manager to install firebase
  ```
  $ npm install firebase-tools (we'll use firebase to get things running)
  ```

  3. Submit an issue on the repository (including your gmail) requesting to be 
    added to the firebase project. Assign the issue to Joe Studer.

  4. Authorize your firebase account.
  ```
  $ firebase login 
  ```

  5. Add the mst-ka-website project to firebase
  ```
  $ firebase use --add (select mst-ka-website)
  ```
  6. Verify any changes you made by running
  ```
  $ firebase serve
  ```
  and navigating to [localhost:5000](localhost:5000).


### Getting Started

  1. Create a development branch of the repository
  2. In your new branch, edit the firebase.json file, add your name and email 
     to the contributors section.
  3. Commit and push the changes to your branch 
  4. Submit a Pull Request.

### Recommended Practices
#### Branch Naming

All branches should be named <username>-<issuename>

#### CSS

All CSS files should be stored in the _styles_ directory.

#### Scripts

All script files should be stored in the _script_ directory.

#### HTML

Excluding the main page, all html views should be stored in the _views_ directory.
