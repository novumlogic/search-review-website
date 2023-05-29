FROM node:alpine

# WORKDIR '/app'

# COPY package.json .
# RUN npm install
# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "build"]
# CMD ["npm", "run",  "start"]

# RUN npm i -g npm@8.5.5
# ENV APP_HOME=/usr/src/app
# RUN mkdir -p $APP_HOME
# COPY . $APP_HOME
# RUN cd $APP_HOME && npm ci
# WORKDIR $APP_HOME
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]


# Build stage
FROM node:alpine AS build
WORKDIR /app
COPY package.json .
COPY next.config.js ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.js ./
COPY public ./public
EXPOSE 3000
CMD ["npm", "start"]

