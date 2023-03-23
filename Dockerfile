FROM node:16-alpine as build-step
#RUN mkdir -p /app
WORKDIR /usr/local/app
COPY package.json /usr/local/app
COPY .npmrc /usr/local/app
RUN npm install -f
COPY . /usr/local/app
#RUN npm run build --prod
# Generate the build of the application
ARG ZXBILD="prod"   #default argument when not provided in the --build-arg
RUN echo $ZXBILD
RUN if [ "$ZXBILD" = "prod" ] ; then \
    npm run build; fi

RUN if [ "$ZXBILD" = "dev" ] ; then \
    npm run build; fi

RUN if [ "$ZXBILD" = "qa" ] ; then \
    npm run build; fi

RUN if [ "$ZXBILD" = "demo" ] ; then \
    npm run build; fi

RUN if [ "$ZXBILD" = "fcc" ] ; then \
    npm run build; fi

RUN if [ "$ZXBILD" = "gfl" ] ; then \
    npm run build; fi


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
#FROM nginx:1.17.1-alpine
FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build-step /usr/local/app/dist/demo /usr/share/nginx/html

# Expose port 80
EXPOSE 80
