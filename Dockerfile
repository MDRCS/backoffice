### STAGE 1: Build ###

FROM node:alpine as builder

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy npm package files
COPY package*.json ./

# Install npm dependencies
RUN npm set progress=false && npm i --silent

# Copy app files to out container
COPY . .

# Build app
RUN $(npm bin)/ng build --prod


# set maintainer
LABEL maintainer "mdr.ga99@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

# tell docker what port to expose
EXPOSE 8000

### STAGE 2: Setup ###

FROM nginx:alpine

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

# Copy build files from first image to nginx dir
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
