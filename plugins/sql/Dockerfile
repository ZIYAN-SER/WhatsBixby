
FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ZIYAN-SER/WhatsBixby /root/WhatsBixby
WORKDIR /root/WhatsBixby/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines
RUN git clone https://github.com/ZIYAN-SER/media

CMD ["node", "bot.js"]


