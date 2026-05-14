"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div
      style={{

        position: "fixed",

        inset: 0,

        background: "#050505",

        zIndex: 999999,

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

      }}
    >

      <div
        style={{

          color: "white",

          fontWeight: 800,

          letterSpacing: "0.3em",

          fontSize: "18px",

        }}
      >
        ERIC.DEV
      </div>

    </div>

  );

}