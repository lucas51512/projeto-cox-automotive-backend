import { Controller, Get, Param } from '@nestjs/common';
import { ViaCepService } from '../services/via-cep.service';

@Controller('viaCep')
export class ViaCepController {
  constructor(private viaCepService: ViaCepService) {}

  @Get(':cep')
  async getEnderecoPorCep(@Param('cep') cep: string): Promise<any> {
    return await this.viaCepService.getEnderecoPorCep(cep);
  }
}
