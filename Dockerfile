FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY back-end/package*.json back-end/
COPY front-end/package*.json front-end/

RUN npm run install-back-end --omit=dev
RUN npm run install-front-end --omit=dev
RUN npm run build-fe

COPY back-end/ back-end/

USER node

CMD ["npm", "start", "--prefix", "back-end"]

EXPOSE 8000