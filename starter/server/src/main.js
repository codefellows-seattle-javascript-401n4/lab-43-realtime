import * as server from './lib/server.js'

require('dotenv').config();

server.start(process.env.PORT || 3000);
