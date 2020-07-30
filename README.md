# mock-users
Simple Express API for mocking user data during frontend development

Random data generated using [Marak](https://github.com/Marak)'s excellent [faker.js](https://github.com/marak/Faker.js/) package.

## Usage

Customize to suit your needs by:

- rewriting the user data fields returned in **generateUsers.js**

- if you have enum values (such as _status_), you can adjust the weights for how frequently each of your enum fields selects from the choices. Useful if you want a more representative distribution in the mocked data for your enum values.


