import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  sendTelegramMessage,
} from "@/lib/telegram";

export async function POST(
  request: NextRequest
) {

  try {

    const body =
      await request.json();

    console.log(
      "CONTACT BODY:",
      body
    );

    const name =
      body.name;

    const email =
      body.email;

    const message =
      body.message;

    const telegramMessage = `

🚀 NEW AI LEAD

👤 Name:
${name}

📧 Email:
${email}

💬 Message:
${message}

⏰ Time:
${new Date().toLocaleString()}

`;

    await sendTelegramMessage(
      telegramMessage
    );

    return NextResponse.json({

      success: true,

    });

  } catch (error) {

    console.error(
      "CONTACT ERROR:",
      error
    );

    return NextResponse.json(

      {
        success: false,
      },

      {
        status: 500,
      }

    );

  }

}