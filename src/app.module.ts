import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViaCepModule } from './via-cep/via-cep.module';
import { PessoaModule } from './pessoa/pessoa.module';

@Module({
  imports: [ViaCepModule, PessoaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
