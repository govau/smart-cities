
require('dotenv').config();

if (typeof process.env.SLACK_WEBHOOK_URL === 'undefined') {
  console.warn('Unable to send Slack notification without token.')
}

var slack = require('slack-notify')(process.env.SLACK_WEBHOOK_URL);

slack.send({
  channel: '#dimo-tech',
  text: 'Just deployed the UI Styleguide to http://ict-projects-dashboard-ui.surge.sh/',
  unfurl_links: 1,
  username: 'elisechant'
});
