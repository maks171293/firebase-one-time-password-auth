const twilio = require('twilio');

const accountSid = 'AC9589595e13e985b0c759dae3f5793021'
const authToken = '7adf0ef72d27e168fa7e3c30a8198830'

module.exports = new twilio.Twilio(accountSid, authToken);
