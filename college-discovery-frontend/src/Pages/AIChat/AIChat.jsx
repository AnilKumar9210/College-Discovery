import { useState, useRef, useEffect } from "react";

import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import { User } from "lucide-react";

// import { authContex } from "../../Context/AuthContext";
import { useAuth } from "../../Context/AuthContext";

const AIChat = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [currentChatId, setCurrentChatId] = useState(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hello! I'm your AI College Counselor. Ask me anything about colleges, admissions, rankings, fees, placements, or career guidance.",
    },
  ]);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
  try {
    const res = await api.get("/chats", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    setChats(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

  const loadChat = async (id) => {
    const response = await api.get(`/chats/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    setCurrentChatId(id);

    setMessages(response.data.data.messages);
  };

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (customMessage) => {
    const finalMessage = customMessage || message;

    if (!finalMessage.trim()) return;

    const userMessage = {
      role: "user",
      content: finalMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    try {
      setLoading(true);

      let chatId = currentChatId;

      // Create chat first time

      if (!chatId) {
        const chatResponse = await api.post(
          "/chats",
          {
            message: finalMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );

        chatId = chatResponse.data.data._id;

        setCurrentChatId(chatId);
      }

      // Save user message

      // await api.put(
      //   `/chats/${chatId}/message`,
      //   {
      //     role: "user",
      //     content: finalMessage,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${user.token}`,
      //     },
      //   },
      // );

      // AI response

      const response = await api.post("/ai-chat", {
        message: finalMessage,
      });

      const aiMessage = {
        role: "assistant",

        content: response.data.reply,

        colleges: response.data.colleges || [],
      };

      setMessages((prev) => [...prev, aiMessage]);

      // Save AI response

      await api.put(
        `/chats/${chatId}/message`,
        {
          role: "assistant",

          content: response.data.reply,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",

          content: "⚠️ Sorry, something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setCurrentChatId(null);

    setMessages([{
      role: "assistant",
      content:
        "👋 Hello! I'm your AI College Counselor. Ask me anything about colleges, admissions, rankings, fees, placements, or career guidance.",
    },]);
  };

  return (
    <MainLayout>
      <section
        className="
          min-h-screen
          bg-gradient-to-br
          from-slate-950
          via-slate-900
          to-blue-950
          py-8
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
          "
        >
          {/* Header */}

          <div
            className="
              flex
              items-center
              gap-4
              mb-8
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-600
                animate-pulse
              "
            />

            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                AI College Counselor
              </h1>

              <p
                className="
                  text-slate-400
                "
              >
                <div>
                  <p className="text-slate-400">
                    Powered by AI + College Intelligence
                  </p>

                  <span
                    className="
      inline-flex
      items-center
      gap-2
      px-3
      py-1
      rounded-full
      bg-cyan-500/10
      border
      border-cyan-500/20
      text-cyan-300
      text-xs
      mt-2
    "
                  >
                    ● Live College Database
                  </span>
                </div>
              </p>
            </div>
          </div>

          <div
            className="
              grid
              lg:grid-cols-[280px_1fr]
              gap-6
            "
          >
            {/* Sidebar */}

            <aside
              className="
                bg-slate-900/50
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                h-fit
              "
            >
              <button
                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-2xl
                  transition
                "
                onClick={handleNewChat}
              >
                + New Chat
              </button>

              <h3 className="text-white mb-4">Recent Chats</h3>

              {chats.map((chat) => (
                <button
                  key={chat._id}
                  onClick={() => loadChat(chat._id)}
                  className="
      w-full
      text-left
      p-3
      rounded-xl
      hover:bg-white/10
      text-slate-300
    "
                >
                  {chat.title}
                </button>
              ))}
            </aside>

            {/* Chat Area */}

            <div
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                flex
                flex-col
                h-[85vh]
              "
            >
              {/* Messages */}

              <div
                className="
                  flex-1
                  overflow-y-auto
                  p-6
                  space-y-5
                "
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="max-w-[85%]">
                      <div
                        className={`px-5 py-4 rounded-3xl whitespace-pre-wrap ${
                          msg.role === "user"
                            ? `
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              shadow-lg
              shadow-cyan-500/20
            `
                            : `
              bg-slate-900/60
              backdrop-blur-xl
              border
              border-white/10
              text-slate-100
            `
                        }`}
                      >
                        {msg.content}
                      </div>

                      {msg.colleges?.length > 0 && (
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          {msg.colleges.map((college) => (
                            <div
                              key={college._id}
                              className="
                bg-slate-900/60
                backdrop-blur-xl
                border
                border-cyan-500/20
                rounded-2xl
                p-4
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
                transition-all
              "
                            >
                              <h3 className="text-white font-bold text-lg">
                                {college.name}
                              </h3>

                              <p className="text-slate-400 mt-1">
                                📍 {college.state}
                              </p>

                              <div className="flex justify-between mt-3">
                                <span className="text-cyan-400">
                                  ⭐ {college.rating}
                                </span>

                                <span className="text-green-400">
                                  ₹{college.fees?.toLocaleString()}
                                </span>
                              </div>

                              <div className="mt-3 text-sm text-slate-400">
                                NIRF Rank #{college.nirfRank || "N/A"}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-white
                    "
                  >
                    <span className="animate-bounce">●</span>

                    <span className="animate-bounce delay-100">●</span>

                    <span className="animate-bounce delay-200">●</span>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input */}

              <div
                className="
                  border-t
                  border-white/10
                  p-5
                "
              >
                <div
                  className="
                    flex
                    gap-3
                  "
                >
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask anything about colleges..."
                    className="
                      flex-1
                      bg-slate-900/70
                      border
                      border-white/10
                      text-white
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      placeholder:text-slate-500
                      focus:border-cyan-400
focus:ring-2
focus:ring-cyan-500/20
                    "
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        sendMessage();
                      }
                    }}
                  />

                  <button
                    onClick={() => sendMessage()}
                    disabled={loading}
                    className="
                      px-8
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      text-white
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AIChat;
