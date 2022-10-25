FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY prisma ./prisma/
COPY .env.* ./
COPY tsconfig.json ./

RUN npm install --silent
RUN npx prisma generate
COPY . .

CMD ["npm", "run", "test"]