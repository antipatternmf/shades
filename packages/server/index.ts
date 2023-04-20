import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import * as process from 'process';
import type { ViteDevServer } from 'vite';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { preloadedState } from './preloadedState';

dotenv.config();
// import { createClientAndConnect } from './db'

const isDev = () => process.env.NODE_ENV === 'development';

async function startServer() {
  const app = express();
  app.use(cors());
  const port = Number(process.env.SERVER_PORT) || 3001;

  // createClientAndConnect()

  let vite: ViteDevServer | undefined;

  const srcPath = path.dirname(require.resolve('client'));

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite!.middlewares);
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)');
  });

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        const distPath = path.dirname(require.resolve('client/dist/index.html'));

        app.use('/assets', express.static(path.resolve(distPath, 'assets')));

        template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8');
      } else {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8');

        template = await vite!.transformIndexHtml(url, template);
      }

      let render: (preloadedState: object, url: string) => Promise<string>;

      if (!isDev()) {
        const ssrClientPath = require.resolve('client/ssr-dist/client.cjs');
        render = (await import(ssrClientPath)).render;
      } else {
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'src/ssr.tsx'))).render;
      }

      const [initialState, htmlTmp] = await render(preloadedState, url);

      const initialStateMarkup = `window.initialState=${JSON.stringify(initialState)}`;

      const html = template
        ?.replace(`<!--ssr-outlet-->`, htmlTmp)
        .replace(`<!--ssr-initial-state-->`, initialStateMarkup);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        vite?.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

startServer();
