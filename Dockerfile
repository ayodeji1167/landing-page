FROM node:lts-alpine as BUILD_STAGE

WORKDIR /app

COPY package.json  yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# ===========PRODUCTION-----------------

FROM node:16-alpine AS PRODUCTION_STAGE

WORKDIR /app

COPY --from=BUILD_STAGE /app/package.json ./ 
COPY --from=BUILD_STAGE /app/.next ./
