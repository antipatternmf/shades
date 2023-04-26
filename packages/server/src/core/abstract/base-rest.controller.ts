import type express from 'express';

export abstract class BaseRestController {
  abstract getOne?: (request: express.Request, response: express.Response) => Promise<any>;
  abstract getAll?: (request: express.Request, response: express.Response) => Promise<any>;
  abstract create?: (request: express.Request, response: express.Response) => Promise<any>;
  abstract update?: (request: express.Request, response: express.Response) => Promise<any>;
  abstract delete?: (request: express.Request, response: express.Response) => Promise<any>;
  abstract search?: (request: express.Request, response: express.Response) => Promise<any>;
}
