import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto } from './create-router.dto';

export class UpdateRouteDto extends PartialType(CreateRouteDto) {}
