import nodemailer from "nodemailer";

interface SendEmailProps {

  name: string;

  email: string;

  message: string;

}

const EMAIL_SERVER =
  process.env.EMAIL_SERVER;

const EMAIL_PORT =
  process.env.EMAIL_PORT;

const EMAIL_USER =
  process.env.EMAIL_USER;

const EMAIL_PASSWORD =
  process.env.EMAIL_PASSWORD;

const EMAIL_RECEIVER =
  process.env.EMAIL_RECEIVER;

export async function sendEmail({
  name,
  email,
  message,
}: SendEmailProps) {

  try {

    /* VALIDATION */

    if (
      !EMAIL_SERVER ||
      !EMAIL_PORT ||
      !EMAIL_USER ||
      !EMAIL_PASSWORD ||
      !EMAIL_RECEIVER
    ) {

      console.warn(
        "Email environment variables are missing."
      );

      return {
        success: false,
        error:
          "Email configuration missing.",
      };

    }

    /* TRANSPORTER */

    const transporter =
      nodemailer.createTransport({

        host: EMAIL_SERVER,

        port: Number(EMAIL_PORT),

        secure: true,

        auth: {

          user: EMAIL_USER,

          pass: EMAIL_PASSWORD,

        },

      });

    /* EMAIL TEMPLATE */

    const html = `

      <div
        style="
          background:#050505;
          padding:40px;
          font-family:Arial,sans-serif;
          color:white;
        "
      >

        <h1
          style="
            font-size:32px;
            margin-bottom:24px;
          "
        >
          🤖 NEW AI LEAD
        </h1>

        <div
          style="
            background:rgba(255,255,255,0.05);
            border:1px solid rgba(255,255,255,0.1);
            border-radius:24px;
            padding:24px;
          "
        >

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

          <p
            style="
              margin-top:32px;
              opacity:0.7;
            "
          >
            Sent from Eric.dev AI Infrastructure
          </p>

        </div>

      </div>

    `;

    /* SEND */

    const info =
      await transporter.sendMail({

        from:
          `"Eric.dev AI" <${EMAIL_USER}>`,

        to: EMAIL_RECEIVER,

        subject:
          "🤖 New AI Lead — Eric.dev",

        html,

      });

    return {

      success: true,

      messageId:
        info.messageId,

    };

  } catch (error) {

    console.error(
      "Email Send Error:",
      error
    );

    return {

      success: false,

      error,

    };

  }

}