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
      "BODY:",
      body
    );

    const telegramMessage = `

🚀 NEW AI LEAD

👤 Name:
${body.name}

📧 Email:
${body.email}

💬 Message:
${body.message}

`;

    const telegramResult =
      await sendTelegramMessage(
        telegramMessage
      );

    console.log(
      "TELEGRAM RESULT:",
      telegramResult
    );

    return NextResponse.json({

      success: true,

      received: body,

    });

  } catch (error) {

    console.error(
      "CONTACT API ERROR:",
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