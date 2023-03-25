import Input from "../components/input/Input";
import styles from "~/index.css";
import { useState, useEffect } from "react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "favicon.ico",
    },
    { rel: "manifest", href: "site.webmanifest" },
  ];
}

export default function Index() {
  const [isReady, setIsReady] = useState(false);
  // console.log(ENV);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <div className="app">
      <div className="header">
        <h1>wordbot</h1>
      </div>

      <div className="main">
        <Input />
      </div>
    </div>
  );
}
