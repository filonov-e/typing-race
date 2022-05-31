FROM node:16-alpine
RUN 
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["yarn", "start"]
EXPOSE 3000