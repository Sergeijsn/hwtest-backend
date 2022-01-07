import { IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateNodeDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;
  @IsIn(['+', '-', '*', '/'])
  @IsOptional()
  symbol?: string;
  @IsInt()
  @IsOptional()
  parent?: string;
}
