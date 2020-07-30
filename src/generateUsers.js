const faker = require("faker");
const logicallySequencedDateFields = require("./logicallySequencedDateFields");
const randomWeightedSelection = require("./randomWeightedSelection");

const statusChoices = [
  ["active", 50],
  ["inactive", 1],
];

module.exports = function generateUsers(batchSize) {
  let counter = 0;
  let userBatch = [];
  let baseDate = faker.date.recent();
  let dateFields = logicallySequencedDateFields(baseDate);
  do {
    let userName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let userNameCompact = userName.replace(" ", "");
    userBatch.push({
      full_name: userName,
      bio: faker.lorem.sentence(),
      days_completed: dateFields.daysCompleted,
      github_score: Math.floor(Math.random() * 300 + 1),
      github_streak: Math.floor(Math.random() * 100 + 1),
      github_username: userNameCompact,
      last_entry_at: baseDate,
      joined_on: dateFields.joinedOn,
      linkedin_profile: `https://www.linkedin.com/in/${userNameCompact.toLowerCase()}/`,
      status: `${randomWeightedSelection(statusChoices)}`,
      twitter_score: Math.floor(Math.random() * 100 + 1),
      twitter_streak: Math.floor(Math.random() * 10 + 1),
      twitter_username: `${userNameCompact}${Math.floor(
        Math.random() * 1000 + 1
      )}`,
      avatar_image: faker.image.avatar(),
    });
    counter += 1;
  } while (counter < batchSize);
  return userBatch;
};
