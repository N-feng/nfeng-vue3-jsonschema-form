export default {
  name: 'Simple',
  schema: {
    description: 'A simple from example.',
    type: 'string',
    required: ['firstName', 'lastName'],
    properties: {
      fistName: {
        type: 'string',
        default: 'Chuck',
      },
      lastName: {
        type: 'string',
      },
      telephone: {
        type: 'string',
        minLength: 10,
      },
    },
  },
  uiSchema: {
    title: 'A registration form',
    properties: {
      fistName: {
        title: 'Firse name',
      },
      lastName: {
        title: 'Last name',
      },
      telephone: {
        titile: 'Telephone',
      },
    },
  },
  default: {
    firstName: 'Chunk',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
  },
}
