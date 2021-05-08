FROM node:16
# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json yarn.lock ./
# Install all Packages
# RUN npm install --global yarn
RUN yarn
# Copy all other source code to work directory
ADD . ./
# TypeScript
RUN yarn run tsc
# Start
CMD [ "yarn", "start" ]
EXPOSE 3000