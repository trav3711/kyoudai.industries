FROM node:14-alpine
WORKDIR /opt

ENV PORT=8080
EXPOSE 8080

RUN apk add --no-cache git make g++

COPY . .

RUN yarn install --non-interactive --frozen-lockfile
RUN yarn run build
CMD ["yarn", "run", "start"]
