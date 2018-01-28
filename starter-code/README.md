## configuration
configure a .env inside /server file to include the following

PORT=3000

NODE_ENV='dev'

SECRET='shark in the dark'

API_URL='http://localhost:3000'

CLIENT_URL='http://localhost:8080'

CORS_ORIGINS='http://localhost:8080'

MONGODB_URI='mongodb://localhost/slugchat-dev'

GOOGLE_CLIENT_SECRET='<put google client secret here>'

GOOGLE_CLIENT_ID='<put your google cleint id here>'



configure a .env inside /client file to include the following
 
NODE_ENV=dev

API_URL=http://localhost:3000

AUTH_URL=http://localhost:3000

CLIENT_URL=http://localhost:8080

GOOGLE_CLIENT_SECRET='<put google client secret here>'

GOOGLE_CLIENT_ID='<put your google cleint id here>'


1. In one terminal, run `npm run watch` from /server to run the server

2. In a 2nd terminal, run mongo from /server. (Make sure you have a db directory!)

3. In a 3rd terminal, run `npm run watch` from /client to start webpack.

Open browser at localhost:8080 and you are ready to chat!



