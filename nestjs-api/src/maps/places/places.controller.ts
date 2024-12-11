import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service'; // Certifique-se de importar o serviço corretamente

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {} // Corrigi o nome da variável

  @Get()
  findPlace(@Query('text') text: string) {
    return this.placesService.findPlaces(text); // Corrigi o nome do método para findPlaces
  }
}
