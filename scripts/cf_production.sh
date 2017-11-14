#!/usr/bin/env bash

set -euxo pipefail

# Log in to production environment

cf api $CF_PRODUCTION_API #&> /dev/null
cf auth $CF_PRODUCTION_USER $CF_PRODUCTION_PASSWORD #&> /dev/null
cf target -o $CF_PRODUCTION_ORG #&> /dev/null
cf target -s $CF_PRODUCTION_SPACE #&> /dev/null
