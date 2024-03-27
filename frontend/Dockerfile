# Use the official Nginx image as a parent image
FROM nginx:alpine

# Copy static content into place
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Copy the Nginx configuration file from the nginx/ directory into the container
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# No need to specify CMD if you're not changing it from the base image
