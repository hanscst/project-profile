# ---------- Builder stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (uses package-lock.json for reproducibility)
COPY package.json package-lock.json ./
RUN npm ci

# Build static assets
COPY . .
RUN npm run build

# ---------- Runner stage ----------
FROM nginx:alpine AS runner

# Copy built SPA assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with SPA-optimized config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Run nginx as unprivileged user for lightweight/secure runtime
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid

USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
