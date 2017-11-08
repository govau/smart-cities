#!/usr/bin/env bash

set -euxo pipefail

# Log in to staging environment

cf api $CF_STAGING_API #&> /dev/null
cf auth $CF_STAGING_USER $CF_STAGING_PASSWORD #&> /dev/null
cf target -o $CF_STAGING_ORG #&> /dev/null
cf target -s $CF_STAGING_SPACE #&> /dev/null
