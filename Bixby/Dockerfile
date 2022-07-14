FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ZIYAN-SER/WhatsBixby /Zyn/Bixby
WORKDIR /Zyn/Bixby
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
