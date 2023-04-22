import type { Request, Response } from 'express';
import { SiteThemeService } from './site-theme.service';
import type { BaseRestController } from '../core/abstract/base-rest.controller';

export class SiteThemeController implements BaseRestController {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;

    const siteThemeService = new SiteThemeService();

    try {
      await siteThemeService.create(body);
    } catch (error) {
      response.status(500).send('');
    }
  };
}
