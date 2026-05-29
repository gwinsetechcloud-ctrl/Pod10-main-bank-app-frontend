# Build React app with API URL baked in at build time
FROM node:18-alpine AS build
WORKDIR /app

ARG REACT_APP_API_URL=https://bankapi.cohort5pod10.online
ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve static build with nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
