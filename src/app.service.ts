import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  areYouOk(): string {
    return 'Bien';
  }

  getHello(): string {
    return 'Hola Mundo!';
  }
}
