const TELEGRAM_BOT_TOKEN =
  process.env.TELEGRAM_BOT_TOKEN;

const TELEGRAM_CHAT_ID =
  process.env.TELEGRAM_CHAT_ID;

export async function sendTelegramMessage(
  text: string
) {

  try {

    const response =
      await fetch(

        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },

          body: JSON.stringify({

            chat_id:
              TELEGRAM_CHAT_ID,

            text,

          }),

        }

      );

    const data =
      await response.json();

    console.log(
      "TELEGRAM:",
      data
    );

    return data;

  } catch (error) {

    console.error(
      "TELEGRAM ERROR:",
      error
    );

    throw error;

  }

}