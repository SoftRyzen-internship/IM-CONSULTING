import { generateText } from '@/utils/generateText';
import { mailOptions, transporter } from '@/utils/nodemailer';

export async function POST(req) {
  const body = await req.json();
  await transporter.sendMail({ ...mailOptions, text: generateText(body) });
  return new Response('Successful');
}
