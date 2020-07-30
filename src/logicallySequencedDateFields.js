const faker = require("faker");

/*

- User records often contain several different date-related fields
- Frontends often use these date-related fields to render the UI based on these dates (such as badges, progress bars, etc)
- For your use case, it may be desirable for mock user data to have consistent, logical relationships between the date-related fields
- So that values for fields like joined_on precede last_entry_at

*/

module.exports = function logicallySequencedDateFields(baseDate) {
  const DAY_DURATION = 60 * 60 * 24 * 1000; // day duration, in ms (86400000)

  const obj = {};

  const daysCompleted = Math.floor(Math.random() * 25 + 1);
  const joinedOn = new Date(
    Date.parse(baseDate) -
      daysCompleted * DAY_DURATION -
      Math.floor(Math.random() * 15 + 1) * DAY_DURATION
  ).toISOString();

  obj.baseDate = baseDate;
  obj.daysCompleted = daysCompleted;
  obj.joinedOn = joinedOn;

  return obj;
};
