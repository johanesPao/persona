FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY front-end/ front-end/

COPY back-end/package*.json back-end/
COPY front-end/package*.json front-end/

RUN npm run install-back-end --omit=dev --verbose --no-audit
RUN npm run install-front-end --verbose --no-audit
RUN npm run build-fe
RUN rm -rf front-end/

COPY back-end/ back-end/

USER node

CMD ["npm", "start", "--prefix", "back-end"]

EXPOSE 8000