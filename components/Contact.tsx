"use client";

import { useState } from "react";

export default function Contact() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  async function submitForm() {

    try {

      setLoading(true);

      setSuccess(false);

      const response =
        await fetch(
          "/api/contact",
          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",

            },

            body: JSON.stringify({

              name,

              email,

              message,

            }),

          }
        );

      const data =
        await response.json();

      console.log(data);

      if (data.success) {

        setSuccess(true);

        setName("");

        setEmail("");

        setMessage("");

      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="container">

        <div className="contact-card">

          <h2 className="contact-title">
            Start Project
          </h2>

          <p className="contact-description">

            AI systems,
            SaaS products,
            automation ecosystems
            and premium digital infrastructure.

          </p>

          <div className="contact-form">

            <input

              type="text"

              placeholder="
                Your name
              "

              value={name}

              onChange={(e) =>
                setName(
                  e.target.value
                )
              }

              className="
                contact-input
              "
            />

            <input

              type="email"

              placeholder="
                Your email
              "

              value={email}

              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }

              className="
                contact-input
              "
            />

            <textarea

              placeholder="
                Tell me about your project
              "

              value={message}

              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }

              className="
                contact-textarea
              "
            />

            <button

              onClick={submitForm}

              disabled={loading}

              className="
                primary-button
              "
            >

              {loading
                ? "Sending..."
                : "Send Request"}

            </button>

            {success && (

              <div className="
                contact-success
              ">

                Message sent successfully.

              </div>

            )}

          </div>

        </div>

      </div>

    </section>

  );

}