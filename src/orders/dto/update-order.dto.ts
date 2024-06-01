import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { OrderStatusList } from '../enums/order.enum';
import { OrderStatus } from '@prisma/client';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

  @IsUUID()
  @IsOptional()
  id: string;

  @IsEnum(OrderStatusList, {
    message: `Status must be one of ${OrderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus;
}
