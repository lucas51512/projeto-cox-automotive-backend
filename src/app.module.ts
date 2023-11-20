import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViaCepModule } from './via-cep/via-cep.module';

@Module({
  imports: [ViaCepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
