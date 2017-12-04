#!/usr/bin/env bash

set -euxo pipefail

# Build the app

npm install
npm run build
npm run generate-city-data

# Install CF CLI 

curl -v -L -o cf-cli_amd64.deb 'https://cli.run.pivotal.io/stable?release=debian64&version=6.32.0&source=github-rel'
sudo dpkg -i cf-cli_amd64.deb

# Install Autopilot plugin

cf install-plugin https://github.com/govau/autopilot/releases/download/0.0.5-venapp/autopilot-linux -f

# Install htpasswd for basic auth

sudo apt-get update && sudo apt-get install apache2-utils
