import Horizon from '@horizon/client';
import config from '../../config';

// eslint-disable-next-line
const horizon = Horizon({
  host: `${config.server.host}:${config.server.port}`,
  secure: config.server.secure
});

horizon.connect();

export default horizon;
