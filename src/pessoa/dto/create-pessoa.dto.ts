export class CreatePessoaDto {
  id: number;
  nomeCompleto: string;
  apelido?: string;
  cep: string;
  cidade: string;
  estado: string;
  logradouro: string;
  bairro: string;
  numero: string;
  complemento: string;
  novoEndereco: boolean;
}
