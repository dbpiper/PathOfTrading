import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = [gql`
  type Stash {
    id: ID!
    public: Boolean!
    accountName: String!
    lastCharacterName: String!
    stash: String!
    stashType: String!
  }

  type Query {
    stashes: [Stash]
    # course(id: Int!): Course
  }
`];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
