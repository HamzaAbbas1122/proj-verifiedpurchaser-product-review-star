import { Request, Response, NextFunction } from 'express';
import { parse as parseJSON } from 'json-parse-middleware';

const jsonParser = parseJSON({
  maxBodyLength: 1000000,
  allowUnknown: true,
  allowExtraKeys: true,
});

export default function jsonParserMiddleware(req: Request, res: Response, next: NextFunction) {
  jsonParser(req, res, next);
}
