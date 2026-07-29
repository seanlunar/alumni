FROM php:8.5-fpm-alpine

# Install system dependencies  
RUN apk add --no-cache \
    libpq-dev \
    postgresql-client \
    zip \
    unzip \
    git \
    curl

# Install PHP extensions
RUN docker-php-ext-install -j$(nproc) \
    pdo \
    pdo_pgsql \
    zip \
    opcache

# Install Redis extension
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS && \
    pecl install redis && \
    docker-php-ext-enable redis && \
    apk del .build-deps

# Copy PHP configuration
COPY docker/php.ini /usr/local/etc/php/conf.d/custom.ini

WORKDIR /var/www/html

CMD ["php-fpm"]
