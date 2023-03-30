import { Schema, Document } from 'mongoose';

interface Stock {
  "name": string,
  "symbol": string,
  "open": number,
  "high": number,
  "low": number,
  "close": number, 
  "volume": number,
  "date": Date,
  "time": Date,
  "user": number
}

export default Stock;
