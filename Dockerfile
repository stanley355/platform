FROM node:18-alpine as builder

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
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
 
# Puppeteer v13.5.0 works with Chromium 100.
RUN yarn add puppeteer@20
 
# # Add user so we don't need --no-sandbox.
# RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
#     && mkdir -p /home/pptruser/Downloads /app \
#     && chown -R pptruser:pptruser /home/pptruser \
#     && chown -R pptruser:pptruser /app
 
# Run everything after as non-privileged user.
# USER pptruser

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN yarn
COPY . .
RUN yarn build


FROM node:18-alpine as runner

# WORKDIR /app

COPY --from=builder . .

WORKDIR /app

EXPOSE 3000

CMD ["yarn", "start"]