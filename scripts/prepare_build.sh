#!/usr/bin/env bash

set -euxo pipefail

# Build the app

npm run build
npm run generate-city-data

# Install CF CLI 

curl -v -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&version=6.17.0&source=github'
sudo dpkg -i cf-cli_amd64.deb

# Install Autopilot plugin

curl -v -L -o ~/autopilot-linux https://github.com/contraband/autopilot/releases/download/0.0.3/autopilot-linux
chmod a+x ~/autopilot-linux
cf install-plugin -f ~/autopilot-linux
