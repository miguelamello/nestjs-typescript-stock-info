import { Controller, Get, UseGuards, Req, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Quote } from '../interfaces/quote.interface';
import { Symbol } from '../decorators/symbol.decorator';
import { StocksService } from './stocks.service';
import { Message } from '../interfaces/message.interface';
@Controller('stocks')
export class StocksController {

  constructor(
    private readonly stocksService: StocksService
  ) {}

  @Get('/history')
  @UseGuards(AuthGuard('jwt'))
  async getHistory(
    @Req() request: Request
  ): Promise<any> {
    const userId = await this.stocksService.getUserId(request);
    if (userId) {
      const collection = await this.stocksService.getHistory(userId);
      if (collection.length) {
        const newCollection = [];
        for (const item of collection) {
          // Perform some action on each item in the collection
          newCollection.push({
            'date': item.date,
            'name': item.name,
            sym
          });
        }
        return collection
      }
      return []
    }
    return []
  } 

  @Get('/:symbol')
  @UseGuards(AuthGuard('jwt'))
  async getQuote(
    @Symbol() symbol: string, 
    @Req() request: Request
  ): Promise<Quote | Message> {
    const response = await this.stocksService.getQuote(symbol);
    if (response.symbol) {
      const userId = await this.stocksService.getUserId(request);
      if (userId) {
        response.user = userId;
        this.stocksService.saveQuote(response);
      }
      return response;
    }
    return { statusCode: 400, message: 'A valid stock symbol is required.' }
  }

}
