import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNodeDto } from './create-node.dto';
import { Node } from './node.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Node)
    private nodeRepository: Repository<Node>,
  ) {}
  findNodes(): Promise<Node[]> {
    return this.nodeRepository.find({
      relations: ['parent'],
    });
  }
  async saveNode(nodeDto: CreateNodeDto): Promise<Node> {
    const node = new Node();
    Object.assign(node, nodeDto);
    if (nodeDto.parent) {
      const par =  await this.nodeRepository.findOne(nodeDto.parent);
      node.parent = par;
    }
    return this.nodeRepository.save(node);
  }
}
