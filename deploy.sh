#!/usr/bin/env bash

RELEASE_DIR='/var/www/hackeryou';
APP_DIR='/var/www/hackeryou/web-hook-demo';

# Fetch Latest Code
[ -d $RELEASE_DIR ] || mkdir $RELEASE_DIR;
cd $APP_DIR;
git pull origin master;

gulp build