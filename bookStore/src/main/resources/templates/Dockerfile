# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the HTML file and image to the Nginx default public directory
COPY index.html /usr/share/nginx/html/
COPY images/bg.png /usr/share/nginx/html/images/

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
