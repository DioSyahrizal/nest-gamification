import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
  pusher: Pusher;

  constructor() {
    this.pusher = new Pusher({
      appId: '967809',
      key: '9ce3c8a195d350f6ff35',
      secret: '5ba29942044e37f4cb4e',
      cluster: 'ap1',
      encrypted: true,
    });
  }

  async trigger(channel: string, message: string, data: any) {
    await this.pusher.trigger(channel, message, data);
  }
}
