# which node version we want to use
FROM node:18-alpine

# set the work directory
WORKDIR /app

# copy the package jason and install dependencies
COPY package.json .
#COPY package-lock.json .

# this work in buid time
RUN npm install

# copy rest of the file 
COPY . ./

RUN npm run build

# this port are using to run expess application
EXPOSE 3000

CMD ["npm", "run", "start:prod"]

