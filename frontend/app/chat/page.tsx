"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setReply(data.reply);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold">
          3 AM Thoughts
        </h1>

        <div className="bg-zinc-900 p-6 rounded-2xl min-h-[200px]">
          {reply ? (
            <p className="text-zinc-200 whitespace-pre-wrap">
              {reply}
            </p>
          ) : (
            <p className="text-zinc-500">
              Start a conversation...
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How are you feeling tonight?"
            className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-purple-600 px-6 py-4 rounded-xl hover:bg-purple-700 transition"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </main>
  );
}