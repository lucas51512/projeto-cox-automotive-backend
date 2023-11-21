import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class ViaCepService {
  constructor(private httpService: HttpService) {}

  async getEnderecoPorCep(cep: string): Promise<AxiosResponse<any>> {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    return this.httpService.axiosRef
      .get(apiUrl)
      .then((result) => {
        if (result.data.erro === true) {
          throw new Error('CEP não Encontrado');
        }
        return result.data;
      })
      .catch((error: AxiosError) => {
        throw new BadRequestException(
          `Error in connection request ${error.message}`,
        );
      });
  }
}
