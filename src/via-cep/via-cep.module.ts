import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios/dist';
import { ViaCepService } from './services/via-cep.service';
import { ViaCepController } from './controller/viacep.controller';

@Module({
  controllers: [ViaCepController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [ViaCepService],
  exports: [ViaCepService],
})
export class ViaCepModule {}
