import { generateEmailText } from '@/utils/generateEmailText';
import { mailOptions, transporter } from '@/utils/nodemailer';

export async function POST(req) {
  const body = await req.json();
  await transporter.sendMail({ ...mailOptions, text: generateEmailText(body) });
  return new Response('Successful');
}
