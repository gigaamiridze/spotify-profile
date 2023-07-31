FROM node:18.17.0-alpine

WORKDIR /spotify-profile

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
