import { createServer } from "http";
import next from "next";
import serverless from "serverless-http";
import { parse } from "url";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const preparing = app.prepare();

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url!, true);
  handle(req, res, parsedUrl);
});

// @ts-expect-error
const handleRequest = serverless(server);

module.exports.handler = async (...params) => {
  await preparing;

  // @ts-expect-error
  return handleRequest(...params);
};
