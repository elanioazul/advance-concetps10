import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DiscoveryService, Reflector } from '@nestjs/core';

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
    });
  }
}
