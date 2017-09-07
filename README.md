# ICT Dashboard

[![CircleCI](https://circleci.com/gh/AusDTO/ict-dashboard.svg?style=svg)](https://circleci.com/gh/AusDTO/ict-dashboard)


## Ruby version

## Node version

To install the correct node version:

```nvm use```

## Building/deploying
From the project root, run `yarn run build`.
This will run the build scripts that generate the final `.js` and `.css` files
and copy those assets into the `/backend` directory.

Note: don't run `yarn run build` from the `/frontend` directory.
This will build the files, but not copy them across to the `/backend` directory



## System dependencies

## Configuration

```
cd backend
rake db:drop db:create db:migrate import:data db:seed
```

## Database creation

## Database initialization

To load local data for testing purposes, run the following commands:
```
cd backend
bundle exec rake dash:data:import[spec/support/sample_data.xlsx]
```

## How to run the test suite

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions

## Client SSL auth

Certain environments variables should be set for client SSL auth.

### Disable client SSL auth

To disable client SSL auth, simply set the `BYPASS_CLIENT_SSL` environment
variable to a truthy value (e.g. `1`).

### Enable client SSL auth

To set up client SSL auth, nginx config is required. In the relevant `server`
block, these configs:

```
ssl_client_certificate  /path/to/ca.crt;
ssl_verify_client on;
```

...and in the relevant `location` block:

```
proxy_set_header X-SSL-Client-S-DN   $ssl_client_cert;
proxy_set_header X-CLIENT-VERIFY $ssl_client_verify;
```

The same certificate mentioned in the nginx config should be set in an
environment variable for the application, as well as the key and the password
for it:

```
ROOT_CERT_PATH = '/path/to/root.crt'
ROOT_KEY_PATH  = '/path/to/root.key'
ROOT_KEY_PASS  = 'RootKeyPassword123' # <-- Hopefully better than this :)
```

You'll also need to set a location for client certificates to be stored
so that admins can download them and give them to the users (for security
reasons these are not sent with the invitation). Choose a directory outside
`public` but also that will not be flushed (i.e. not `/tmp`).

`CERT_DIR = '/path/to/certificates'`

Finally, you will need to generate certificates for your users, who will all
be locked out until they obtain and install certificates. You can use the
following rake task:

`bundle exec rake dash:auth:generate`

You will then find the certificates in the directory you set for CERT_DIR.

Currently the certificates are generated with the password 'changeme' that must
be used during installing to browsers. This is a temporary problem that we will
resolve in future commits.

## ...

## ...

## Link @gov.au/datavizkit locally?

https://docs.npmjs.com/cli/link

then change datavizkit/package.json main to "src" instead of "lib"

# UI Styleguide

(http://ict-projects-dashboard-ui.surge.sh/)[UI Styleguide]
