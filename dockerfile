FROM node:18-alpine

WORKDIR /the/workdir/path

COPY package-lock.json package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]



