FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

#Nginx
FROM nginx:latest
RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]