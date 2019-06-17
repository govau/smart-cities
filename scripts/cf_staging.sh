#!/usr/bin/env bash

set -euo pipefail

# Log in to staging environment

cf api $CF_API_STAGING
cf auth $CF_USERNAME $CF_PASSWORD_STAGING
cf target -o $CF_ORG
cf target -s $CF_SPACE
