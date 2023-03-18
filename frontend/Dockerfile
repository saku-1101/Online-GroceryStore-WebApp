# 1st stage build
FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

RUN npm run build


# 2nd stage execute
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app /app

ENV HOST 0.0.0.0
ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "run", "dev" ]

# docker run -it -p 8080:8080 -e WATCHPACK_POLLING=true -v "$(pwd)"/src:/app/src --name uts-fr uts-fr