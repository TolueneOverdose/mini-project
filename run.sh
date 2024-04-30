#!/bin/sh

cd "Guess the country"
npm run start &

cd ../main
python3 -m http.server --bind localhost
