import path from 'path';
import express from 'express';
import horizon from '@horizon/server';
import config from '../config';

const app = express();

// Only serve the frontend app in the Production mode.
// In the Development mode, the Webpack hot module will handle it.
if (process.env.NODE_ENV === 'production') {
  const publicPath = '/';
  const outputPath = path.resolve(process.cwd(), 'build');

  app.use(publicPath, express.static(outputPath));
  app.get('/', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
}

const host = process.env.NODE_ENV === 'production' ? '' : config.server.host;
const port = process.env.PORT || config.server.port;

const httpServer = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Express listening at ${host}:${port}`);
});

const options = {
  auto_create_collection: true,
  auto_create_index: true,
  project_name: 'domain_backer',
  permissions: false,
  auth: {
    allow_anonymous: true,
    allow_unauthenticated: true,
    token_secret: 'your_token_secret'
  }
};
horizon(httpServer, options);
