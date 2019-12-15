FROM wordpress:latest

# 必要なツール郡をインストール
RUN apt-get update
RUN apt-get -y install wget unzip

# WP プラグイン (zip) ダウンロード
WORKDIR /tmp/wp-plugins
RUN wget https://github.com/getshifter/wp-serverless-search/archive/master.zip
RUN wget https://downloads.wordpress.org/plugin/simply-static.2.1.0.zip
# RUN wget https://downloads.wordpress.org/plugin/custom-taxonomy-order-ne.2.10.0.zip
# RUN wget https://downloads.wordpress.org/plugin/google-sitemap-generator.4.1.0.zip
# RUN wget https://downloads.wordpress.org/plugin/advanced-custom-fields.5.7.12.zip

# Zip ファイルを解凍してインストール
RUN unzip './*.zip' -d /usr/src/wordpress/wp-content/plugins

# 不要になった一時ファイルを削除
RUN apt-get clean
RUN rm -rf /tmp/*

# サーバが読めるように wp-content 以下の所有者を変更
RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

WORKDIR /var/www/html
