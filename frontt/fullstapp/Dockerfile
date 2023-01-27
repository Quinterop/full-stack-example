FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN ng build 
EXPOSE 4200 49153
CMD ["npm", "start"]
