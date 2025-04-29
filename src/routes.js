import express from 'express';
import { readAll, writeAll } from './database.js';

export default function makeRouter(resource) {
  const router = express.Router();
  const plural = `/${resource}`;

  // GET all
  router.get(plural, async (_, res, next) => {
    try {
      res.json(await readAll(resource));
    } catch (e) { next(e); }
  });

  // POST create
  router.post(plural, async (req, res, next) => {
    try {
      const items = await readAll(resource);
      items.push(req.body);
      res.json(await writeAll(resource, items));
    } catch (e) { next(e); }
  });

  // PUT update by id
  router.put(`${plural}/:id`, async (req, res, next) => {
    try {
      const items = await readAll(resource);
      const idx = items.findIndex(x => String(x.id) === req.params.id);
      if (idx === -1) return res.sendStatus(404);
      items[idx] = req.body;
      res.json(await writeAll(resource, items));
    } catch (e) { next(e); }
  });

  // DELETE by id
  router.delete(`${plural}/:id`, async (req, res, next) => {
    try {
      const items = await readAll(resource);
      const filtered = items.filter(x => String(x.id) !== req.params.id);
      res.json(await writeAll(resource, filtered));
    } catch (e) { next(e); }
  });

  return router;
}