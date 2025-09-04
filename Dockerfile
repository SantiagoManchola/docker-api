FROM node:20-alpine

# For curl in HEALTHCHECK (optional)
RUN apk add --no-cache curl

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["npm", "start"]
