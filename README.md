# mst-ka.org

This repository serves as the source for the mst-ka.org website, as well
as the alumni portal. 

## Status: [Launched](https://www.mst-ka.org)
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
  $ npm install -g firebase-tools (we'll use firebase to get things running)
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

#### Making Changes
  1. Create a development branch of the repository
  2. In your new branch make whatever changes you wish.
  3. Test your changes with multiple window sizes to ensure mobile compatibility.
  4. Create a PR with the changes.
  5. Run 

  ```
  firebase deploy --only hosting:devel
  ```

  6. Send a message in the group chat that your changes 
     are live on [devel-mst-ka.firebaseapp.com](devel-mst-ka.firebaseapp.com)

For more info on different deploy targets, check out [this article](https://firebase.google.com/docs/cli/targets)

#### Branch Naming

All branches should be named <FirstInitialLastName/IssueName> 

#### firbase-init.js

The firebase-init.js file is important for any work that interacts with the Firebase API,
our database, or any server side actions. However, since it includes the API Key, we 
don't store it in Git. This means there's a couple steps you'll have to follow
if you wan't/need to do this kind of development:

1. Navigate to the scripts/ subdir and create a firebase-init.js file.
2. Go to the [Firebase Console](https://console.firebase.google.com/u/0/) > mst-ka > Project Settings (Gear Icon) > SDK setup and configuration > Config
3. Copy the config into your newly created firebase-init.js file.
4. Add the new firebase-init.js file into your local git-ignore.

#### CSS

All CSS files should be stored in the _styles_ directory.

##### New Classes

New css classes should, by default, go in a .css file associated with the 
html file they are defining a style for (e.g. contact.html -> contact.css).

If your class is meant to define site-wide style changes, then main is still
acceptable, just be prepared to defend your reasoning.

##### Linting

Try your best to keep rules within your class alphabetized, and try to keep
your classes alphabetized within the file. This one can be tough in bigger files,
and we're working on a linter for it.

#### Scripts

All script files should be stored in the _script_ directory. The file name
should be associated to the html file the script is intended for (e.g. contact.html
-> contact.js). This helps to keep files smaller, thus improving load times 
(and it makes development a lot easier).

#### HTML

Excluding the main page, all html views should be stored in the _views_ directory.

##### Sub Pages

All sub pages should have the 
```
<base href="../" />
```
rule at the top of the file. The relative link should move the page's base dir
to the rootdir (where index.html is). This makes it easier to copy
navigation html between pages.

#### Image Extensions

##### .jpg 

Use .jpg files for any regular images (people, landscapes, etc).

##### .svg

Use .svg for any computer graphic files where we have an svg, but don't go digging trying to 
convert icons to svg unless you're good with illustrator/other vector editors.

##### .png

Use .png for any computer graphic we have that it wouldn't be reasonable to make
a .svg for.

#### Contact Us Email

The contact us page uses a free email from [Zoho Mail](mail.zoho.com). Once added
to the firebase account, you can access the user & pass with:

```
$ firebase functions:config:get mail
```
