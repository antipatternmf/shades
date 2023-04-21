import type { Request, Response } from 'express';
import { SiteThemeService } from './site-theme.service';

export class SiteThemeController {
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
