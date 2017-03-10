#!/usr/bin/env bash

RELEASE_DIR='/var/www/hackeryou';
APP_DIR='/var/www/hackeryou/web-hook-demo';

# Fetch Latest Code
cd $APP_DIR;
git pull origin master;

# Run Gulp Build Script
gulp build