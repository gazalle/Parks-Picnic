FROM node:8

# Create app directory
WORKDIR /myapp/src

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]