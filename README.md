# mst-ka.org

This repository serves as the source for the mst-ka.org website, as well
as the alumni portal. 

## Status: (Soft-Launch)[http://mst-ka.firebaseapp.com/]
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

#### Making Changes
  1. Create a development branch of the repository
  2. In your new branch make whatever changes you wish.
  3. Test your changes with multiple window sizes to ensure mobile compatibility.
  4. Submit a PR with the changes.

#### Branch Naming

All branches should be named <FirstInitialLastName/IssueName> 

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
