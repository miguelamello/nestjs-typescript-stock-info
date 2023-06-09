import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {

  getDoc(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);
  }

}
