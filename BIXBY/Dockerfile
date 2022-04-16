FROM RIPPER-SER/bixbymowl:Servers
RUN git clone https://github.com/ZIYAN-SER/Bixby-Mowl /root/Bixby
WORKDIR /root/Bixby/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/ZIYAN-SER/media
CMD ["node", "bot.js"]

