echo "Jump to app folder"
cd /var/www/interactive

echo "NPM Install"
npm install --prefer-offline --no-audit --progress=false

echo "Kill all the running PM2 actions"
pm2 kill

echo "Build your app"
npm run build

echo "Run new PM2 action"
pm2 start /var/www/interactive/ecosystem.json