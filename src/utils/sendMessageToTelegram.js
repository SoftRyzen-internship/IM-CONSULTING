import axios from 'axios';
import { generateText } from './generateText';

export const sendMessageToTelegram = text => {
  const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_API_KEY}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_DIALOGUE_KEY}`;
  const data = axios.post(url, {
    parse_mode: 'html',
    text: generateText(text),
  });
  return data;
};
