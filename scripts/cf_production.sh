#!/usr/bin/env bash

set -euo pipefail

# Log in to production environment

cf api $CF_API_PROD
cf auth $CF_USERNAME $CF_PASSWORD_PROD
cf target -o $CF_ORG
cf target -s $CF_SPACE
