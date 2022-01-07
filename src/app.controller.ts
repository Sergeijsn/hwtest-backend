import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNodeDto } from './create-node.dto';
import { Node } from './node.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nodes')
  getNodes(): Promise<Node[]> {
    return this.appService.findNodes();
  }
  @Post('nodes')
  postNode(@Body() createNodeDto: CreateNodeDto): Promise<Node> {
    return this.appService.saveNode(createNodeDto);
  }
}
