FROM node:lts-alpine as node-modules
WORKDIR /cache/node
COPY package.json package-lock.json ./
RUN npm ci


FROM node:lts-alpine as frontend
ARG REACT_APP_BACKEND_URL
WORKDIR /frontend
COPY --from=node-modules /cache/node/node_modules ./node_modules
COPY . ./
EXPOSE 3000
# RUN npm start
CMD ["npm", "start"]
