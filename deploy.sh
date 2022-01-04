 #!/bin/bash
WEB_PATH='/www/react_project'$1
WEB_USER='root'
WEB_USERGROUP='root'

echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/main
git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Finished."