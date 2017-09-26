#!/usr/bin/env bash

# Build the app

npm run build
npm run generate-city-data

# Install CF CLI 

curl -v -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&version=6.17.0&source=github'
sudo dpkg -i cf-cli_amd64.deb

# Log in to CF

cf api $CF_STAGING_API #&> /dev/null
cf auth $CF_STAGING_USER $CF_STAGING_PASSWORD #&> /dev/null
cf target -o $CF_STAGING_ORG #&> /dev/null
cf target -s $CF_STAGING_SPACE #&> /dev/null