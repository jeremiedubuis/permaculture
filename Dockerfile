FROM node:10.15.3-alpine
COPY . /permaculture

WORKDIR /permaculture

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
