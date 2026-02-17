FROM node:25.6-slim AS development
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
EXPOSE ${FRONTEND_PORT}
CMD ["pnpm","run","start","--","--host","0.0.0.0","--poll","2000"]
