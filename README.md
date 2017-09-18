# Smart Cities

# Developing locally
## First time
Download and install Node, the version used by this site is listed in `package.json`
or if you use `nvm` on macOS, just type `nvm use`.

Clone this repository with `git clone https://github.com/govau/smart-cities`

Change into that directory `cd smart-cities` and run `npm install` (or `npm i`) to install all the dependencies.

## Each time
Type `npm start` to run the site in 'development mode'. This will
reload the page as you make changes to the code.

## Testing
To run tests, type `npm test` (or `npm t`).

On macOS you will want to install [Watchman](https://facebook.github.io/watchman/) first.

## Building the static files for deployment
To build the files for deployment, type `npm run build`.

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

## Container components
All components are 'presentational' components; there are no container components. Reasons:
* There is only one data source
* That data source is never updated
* There is a relatively flat component structure

# CSS
This project uses CSS modules, which enforce scoping of classes to a particular component.
So, when writing a CSS class for, say, the text in a `<Header>` component, you
can name the class relative to that component. That is, `.title` rather than `.header-title`.

In the generated HTML, the `class` will be a concatenation of the component name and the class
name you defined, followed by a hash. E.g. `Header-title--2yh4t`.

This means there is no way to use that `.title` class from the `<Header>` component in
another component. This is a very good thing :)

[Stylelint](https://github.com/stylelint/stylelint) is used to lint the CSS, we're using the
default settings from [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).
Lint errors will display in the console as you work.


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
