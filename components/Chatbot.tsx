"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const initialMessages = [
  {
    role: "assistant",
    content:
      "Привет. Я AI assistant Эрика.dev. Могу рассказать про AI systems, automation infrastructure и digital products.",
  },
];

export default function Chatbot() {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState(initialMessages);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  const generateResponse = (message: string) => {

    const lower = message.toLowerCase();

    if (
      lower.includes("ai")
      || lower.includes("openai")
    ) {

      return "Создаю AI infrastructure, OpenAI integrations, intelligent systems и automation ecosystems нового поколения.";

    }

    if (
      lower.includes("automation")
      || lower.includes("crm")
      || lower.includes("telegram")
    ) {

      return "Разрабатываю automation platforms, Telegram systems, AI workflows и scalable CRM ecosystems.";

    }

    if (
      lower.includes("price")
      || lower.includes("стоимость")
      || lower.includes("цена")
    ) {

      return "Стоимость зависит от сложности AI ecosystem, automation architecture и инфраструктуры проекта.";

    }

    if (
      lower.includes("contact")
      || lower.includes("контакт")
      || lower.includes("telegram")
    ) {

      return "Telegram: @ericilyano";

    }

    return "AI systems, automation infrastructure, SaaS platforms и premium digital ecosystems — основное направление Эрика.dev.";

  };

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const response = generateResponse(input);

    setTimeout(() => {

      setMessages((prev) => [

        ...prev,

        {
          role: "assistant",
          content: response,
        },

      ]);

    }, 700);

    setInput("");

  };

  return (

    <>

      {/* FLOATING BUTTON */}

      <motion.button

        whileHover={{
          scale: 1.08,
        }}

        whileTap={{
          scale: 0.95,
        }}

        onClick={() => setIsOpen(!isOpen)}

        className="chatbot-trigger"
      >

        <div className="chatbot-trigger-glow" />

        <div className="chatbot-trigger-inner">

          AI

        </div>

      </motion.button>

      {/* WINDOW */}

      <AnimatePresence>

        {isOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}

            transition={{
              duration: 0.3,
            }}

            className="chatbot-window"
          >

            {/* GLOW */}

            <div className="chatbot-glow" />

            {/* HEADER */}

            <div className="chatbot-header">

              <div className="chatbot-header-left">

                <div className="chatbot-avatar">

                  <motion.div

                    animate={{
                      scale: [1, 1.1, 1],
                    }}

                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}

                    className="chatbot-avatar-inner"
                  />

                </div>

                <div>

                  <div className="chatbot-title">

                    AI Assistant

                  </div>

                  <div className="chatbot-status">

                    ONLINE

                  </div>

                </div>

              </div>

              <button

                onClick={() => setIsOpen(false)}

                className="chatbot-close"
              >

                ✕

              </button>

            </div>

            {/* BODY */}

            <div className="chatbot-body">

              {messages.map(
                (message, index) => (

                  <motion.div

                    key={index}

                    initial={{
                      opacity: 0,
                      y: 10,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.3,
                    }}

                    className={`chatbot-message ${message.role}`}
                  >

                    {message.content}

                  </motion.div>

                )
              )}

              <div ref={messagesEndRef} />

            </div>

            {/* INPUT */}

            <div className="chatbot-input-wrapper">

              <input

                type="text"

                placeholder="Введите сообщение..."

                value={input}

                onChange={(e) => setInput(e.target.value)}

                onKeyDown={(e) => {

                  if (e.key === "Enter") {
                    handleSend();
                  }

                }}

                className="chatbot-input"
              />

              <motion.button

                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                onClick={handleSend}

                className="chatbot-send"
              >

                Send

              </motion.button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}