# Next.js + yandex.function

## Deploy yandex.function

1.  Выполнить `yarn build`
2.  Собрать архив из dist + .next + package.json
3.  Точка входа dist/lambda.handler
4.  Обязательно добавить NODE_ENV=production в yandex.function
5.  Можно удалить из package.json в yandex.function react и react-dom
6.  Добавить код в api_gatwey:
    ```yml
    openapi: 3.0.0
    info:
      title: Sample API
      version: 1.0.0
    servers:
      - url: https://<ID>.apigw.yandexcloud.net
    paths:
      /{proxy+}:
        x-yc-apigateway-any-method:
          parameters:
            - name: proxy
              in: path
              description: Return ID
              required: false
              schema:
                type: string
          x-yc-apigateway-integration:
            type: cloud_functions
            function_id: d4eir98nhoc5ko7datrl
            payload_format_version: "1.0"
            tag: $latest
    ```

## Полезные ссылки

- custom-server - https://github.com/vercel/next.js/tree/canary/examples/custom-server
- serverless-http - https://www.npmjs.com/package/serverless-http
