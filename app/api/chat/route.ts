import { NextRequest, NextResponse }
from "next/server";

import { openai }
from "@/lib/openai";

export async function POST(
  request: NextRequest
) {

  try {

    const body =
      await request.json();

    const {
      message,
    } = body;

    if (!message) {

      return NextResponse.json(

        {
          success: false,
          error: "Message required",
        },

        {
          status: 400,
        }

      );

    }

    const completion =
      await openai.chat.completions.create({

        model: "gpt-4.1-mini",

        messages: [

          {
            role: "system",

            content: `
You are Eric.dev AI assistant.

You represent a premium AI systems developer,
automation architect,
and modern SaaS ecosystem creator.

Your style:
- premium
- concise
- intelligent
- cinematic
- professional
- futuristic

You help users understand:
- AI systems
- automation
- SaaS
- development
- integrations
- business infrastructure
            `,
          },

          {
            role: "user",

            content: message,
          },

        ],

        temperature: 0.8,

        max_tokens: 500,

      });

    const response =
      completion.choices?.[0]?.message?.content
      || "No response.";

    return NextResponse.json({

      success: true,

      response,

    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(

      {
        success: false,
        error: "OpenAI request failed",
      },

      {
        status: 500,
      }

    );

  }

}