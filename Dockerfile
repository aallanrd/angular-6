FROM node:10.13.0-alpine

#For upgrade
UN apt-get update && apt-get install -y \
  bzr \
  cvs \
  git \
  mercurial \
  subversion

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

#COPY package*.json ./

RUN npm config set proxy http://proxy-chain.intel.com:911
RUN npm config set https-proxy http://proxy-chain.intel.com:912
RUN npm config set strict-ssl false
RUN set HTTP_PROXY=http://proxy-chain.intel.com:911
RUN set HTTPS_PROXY=http://proxy-chain.intel.com:912

# Bundle app source
COPY . .

RUN ls

RUN npm set unsafe-perm true
# Install
RUN npm install --only=production



EXPOSE 8080
CMD [ "npm", "start" ]
