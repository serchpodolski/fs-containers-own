FROM node:24 AS build-stage
WORKDIR /usr/src/app

ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:alpine AS production-stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]