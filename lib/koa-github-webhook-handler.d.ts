/**
 * TypeScript definition for koa-github-webhook-handler
 * 2016 Ændrew Rininsland (@aendrew)
 */
declare module "koa-github-webhook-handler" {
  import {EventEmitter} from 'events';

  export default class GithubWebhookHandler extends EventEmitter {
    constructor(options: {path: string, secret: string});
    middleware(): GeneratorFunction;
  }
}
