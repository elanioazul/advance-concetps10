import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DiscoveryService, Reflector } from '@nestjs/core';
import { wrap } from 'module';
import { INTERVAL_HOST_KEY } from '../decoratos/interval-host.decorator';

@Injectable()
export class IntervalScheduler implements OnApplicationBootstrap {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly reflector: Reflector,
  ) {}
  onApplicationBootstrap() {
    const providers = this.discoveryService.getProviders();
    providers.forEach((wrapper) => {
      const { instance } = wrapper;
      const prototype = instance && Object.getPrototypeOf(instance);
      if (!instance || !prototype) {
        return;
      }
      const isIntervalHost =
        this.reflector.get(INTERVAL_HOST_KEY, instance.constructor) ?? false;
      if (!isIntervalHost) {
        return;
      }
      console.log(wrapper.token);
    });
  }
}
