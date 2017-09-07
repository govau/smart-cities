# Smart Cities

# Setting up the site locally
Download and install Node, the version used by this site is listed in `package.json`
or if you use `nvm` on macOS, just type `nvm use`.

Run `npm install` to install all dependencies.

Type `npm start` to run the site in 'development mode'. This will
reload the page as you make changes.

To build the files for deployment, type `npm build`.

To run tests, type `npm test`. On macOS you will want to install watchman first.

# Code Structure
Components are self-contained units, each in their own directory.
Most Component directories will have the component (e.g. `Button.js`),
the styles, (e.g. `Button.scss`) and a test suit (e.g. `Button.test.js`).

Many will also have a `__snapshots__` directory created automatically by `jest`.

Component files should be named the same as the component they export, and should
only ever contain one component.

CSS classes should only ever be used with the component to which they belong.

If you need to share a style between two components, it should either be its own component
(for example, a 'card' with a shadow would be its own component)
or a mixin (for example a typography style that is used in many different CSS classes).

Components that should connect to a data source should do so using the Redux `connect`
function in a parent container component.

# Data
The data received from the API is not in the exact format required for the front end.
So, at the point when we fetch the data, we parse it so that it *is* in the correct format,
and then avoid manipulating the data any further (except for sorting and filtering) elsewhere
in the app.

# Branch/Commit workflow
All work should be carried out on branches, which are then reviewed before
being merged back into `master`. Branch names should contain the issues number
and start with either `fix/` or `feature/`. E.g. a branch name for adding
the navigation menu might be `feature/324-nav-menu`.
