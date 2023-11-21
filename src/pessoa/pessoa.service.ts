import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePessoaDto) {
    return await this.prisma.pessoa.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.pessoa.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pessoa.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, data: UpdatePessoaDto) {
    return await this.prisma.pessoa.update({
      where: { id: id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.pessoa.delete({
      where: { id: id },
    });
    return `Pessoa ${id} removido`;
  }
}
