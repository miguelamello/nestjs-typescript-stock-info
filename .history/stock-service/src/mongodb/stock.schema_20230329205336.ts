import { Schema } from 'mongoose';

export const StockSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  open: { type: String, required: true },
  high: { type: Date, required: true },
  low: { type: Date, required: true },
  close: { type: Date, required: false },
  volume: { type: Date, required: false },
  date: { type: Date, required: false },
  time: { type: Date, required: false },
});
