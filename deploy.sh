#!/bin/bash

echo "Deploying ShaDoApp"

cd checklist.ui
npm install
npm run build

cd ..
mkdir checklist.service/public
cp -r checklist.ui/build/* checklist.service/public

cd checklist.service
npm install
cd ..

echo "Deployed ShaDoApp"
