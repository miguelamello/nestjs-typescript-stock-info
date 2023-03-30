import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import Quote from './interfaces/quote.interface';

@Injectable()
export class AppService {

  private entreyPoint: string;
  private apiKey: string; 

  constructor() {
    this.entreyPoint = 'http://localhost:3000/quote/';
    this.apiKey = ''; 
  }

  async #getUpdatedQuote( symbol: string ): Promise<Quote> {
    const promisse = await fetch(`${this.entreyPoint}quote/${symbol}`);
    const response = await promisse.json();
    //return (response.symbols[0].name) ? response.symbols[0] : '{}';
  }

  getDoc(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);
  }
  
  getQuote( symbol: string ): Promise<Quote> {
    return this.#getUpdatedQuote( symbol );
  }

}
