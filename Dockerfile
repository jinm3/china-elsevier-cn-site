FROM nginx
COPY ./webshop.elsevier.cn /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/
RUN chown -R nginx:nginx /usr/share/nginx/html
