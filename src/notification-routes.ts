import WebPush from 'web-push';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

const publicKey =
  'BIWS0kH1WMS66q3_3F48u8wN4t_CwQbPIm3vvLTLhh_WEAEwlE_BJcqIh5D84blwB48wTJ_pxq52s7J8QY-pwrU';
const privateKey = 'vbB4JiVMMPAomAy6k2zc4P_uEJMYW1JPUBwL2kDjjF4';

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    };
  });

  app.post('/push/register', (request, replay) => {
    console.log(request.body);

    return replay.status(201).send();
  });

  app.post('/push/send', async (request, replay) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
    WebPush.sendNotification(subscription, 'Hello Do Backend');
    }, 5000)

    return replay.status(201).send();
  });
}
