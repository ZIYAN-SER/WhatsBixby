FROM fusuf/whatsasena:latest

RUN git clone https://github.com/RAFI-SER/Miss.Helena /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines
RUN git clone https://github.com/RAFI-SER/Media

CMD ["node", "bot.js"]
