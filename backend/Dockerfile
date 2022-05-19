FROM node:lts-alpine as node-modules-backend
WORKDIR /cache/node
COPY package.json package-lock.json ./
RUN npm ci

FROM node:lts-alpine as backend
ARG REACT_APP_BACKEND_URL
WORKDIR /backend
COPY --from=node-modules-backend /cache/node/node_modules ./node_modules
COPY . ./
EXPOSE 3001
# RUN npm start
CMD ["npm", "start"]
