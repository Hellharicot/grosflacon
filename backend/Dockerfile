FROM node:25.6-slim

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE ${BACKEND_PORT}

CMD ["pnpm","start"]
