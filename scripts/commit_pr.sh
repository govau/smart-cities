#!/usr/bin/env bash

# ASSUMPTIONS:
# - You are in project root
# - There are changes to commit
# - You are ready to make a PR
# - You are logged in via CF CLI 
# - Your branch contains the Jira issue number e.g. SC-123

# USAGE:
#   ./scripts/commit_pr.sh "Commit message"

set -euo pipefail

COMMIT_MSG=$1
BRANCH=`git rev-parse --abbrev-ref HEAD`
URL_BRANCH=`echo $BRANCH | sed 's/\//%2F/g'`
JIRA_PATTERN='sc-[[:digit:]]*'
JIRA_CODE=`echo $BRANCH | grep -oi $JIRA_PATTERN`
SUBDOMAIN="smart-cities-$JIRA_CODE"
INSTANCE="http://$SUBDOMAIN.apps.staging.digital.gov.au"

git add -A
git commit -m "$COMMIT_MSG"
git push 

npm run build 
cf push $SUBDOMAIN -c "null"

open "https://github.com/govau/smart-cities/compare/$URL_BRANCH?expand=1&body=Preview:+<$INSTANCE>"