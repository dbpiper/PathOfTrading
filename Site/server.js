import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { ApolloEngine } from 'apollo-engine';

/* This is encrypted on commit */
/* Decrypted Config File */
import Config from 'Config';

import schema from './schema';

const app = express();
const PORT = 4000;

const engine = new ApolloEngine({
  apiKey: Config.ApolloEngine,
})

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {},
  tracing: true,
  cacheControl: true,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// engine.listen(PORT, () => {
//   console.log('Express server running on port ' + PORT);
// });

engine.listen({
  port: PORT,
  expressApp: app,
}, () => {
  console.log('Apollo Express server running on port ' + PORT);
});
