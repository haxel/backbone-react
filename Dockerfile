FROM node
RUN npm install bower -g
RUN npm install grunt-cli -g
RUN npm install http-server -g

EXPOSE 8080
VOLUME /app		
WORKDIR /app

CMD [ "http-server" ,"."]
