# 1st stage build
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json .npmrc /app/

RUN npm ci

COPY . /app

RUN npm run build


# 2nd stage execute
FROM node:16-alpine

WORKDIR /app

RUN apk add --no-cache bash

COPY --from=builder /app /app

ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "run", "preview" ]