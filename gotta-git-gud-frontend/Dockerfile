# base image
FROM node:15.4.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >>/etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /src/app

# add 'app/node_modules/.bin to $PATH'
ENV PATH node_modules/.bin$PATH

# install and cache app dependencies
COPY package.json /src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@11.0.4

# add app
COPY . /src/app
ENV PORT=8080
EXPOSE 8080

# start app
CMD ng serve --host 0.0.0.0