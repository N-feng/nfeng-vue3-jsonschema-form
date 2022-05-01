export default {
  name: 'Simple',
  schema: {
    description: 'A simple from example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
        title: 'firstName',
        type: 'string',
        default: 'Chuck',
      },
      lastName: {
        title: 'lastName',
        type: 'string',
      },
      telephone: {
        title: 'telephone',
        type: 'string',
        minLength: 10,
      },
      staticArray: {
        title: 'staticArray',
        type: 'array',
        items: [
          {
            type: 'string',
          },
          {
            type: 'number',
          },
        ],
      },
      singleTypeArray: {
        title: 'singleTypeArray',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            age: {
              type: 'number',
            },
          },
        },
      },
      multiSelectArray: {
        title: 'multiSelectArray',
        type: 'array',
        items: {
          type: 'string',
          enum: ['123', '456', '789'],
        },
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
    singleTypeArray: [{ name: 'jokey', age: 12 }],
  },
}
