# FROM node:18-alpine as builder
FROM node:18-alpine 

# Pass the environment variables to the build command
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID
ARG NEXT_PUBLIC_APP_ENV

# Set the environment variables for the build process
ENV NEXT_PUBLIC_BASE_URL=http://localhost:3000/
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=$NEXT_PUBLIC_GOOGLE_CLIENT_ID
ENV NEXT_PUBLIC_APP_ENV=$NEXT_PUBLIC_APP_ENV

# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Puppeteer v13.5.0 works with Chromium 100.
RUN yarn add puppeteer@20

RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
   && mkdir -p /home/pptruser/Downloads \
   && chown -R pptruser:pptruser /home/pptruser \
   && chown -R pptruser:pptruser /node_modules

USER pptruser

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN yarn
COPY . .
RUN yarn build


# FROM node:18-alpine as runner

# WORKDIR /app

# COPY --from=builder /app .

EXPOSE 3000

CMD ["yarn", "dev"]