const micBtn = document.getElementById("micBtn");
const micIcon = document.getElementById("micIcon");
const chatLog = document.getElementById("chatLog");
const statusText = document.getElementById("statusText");

const BACKEND_URL = "api/assistant.php";
const LANG = "ar-SA";

let isListening = false;

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognitionAPI) {
  statusText.textContent = "متصفحك لا يدعم التعرف على الصوت. جرّب Chrome أو Edge.";
  micBtn.disabled = true;
} else {
  const recognition = new SpeechRecognitionAPI();
  recognition.lang = LANG;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
      return;
    }

    try {
      recognition.start();
    } catch (error) {
      console.error("Could not start listening:", error);
    }
  });

  recognition.onstart = () => {
    isListening = true;
    micBtn.classList.add("listening");
    micIcon.textContent = "⏹️";
    statusText.textContent = "أستمع الآن... تحدّث بحرية";
  };

  recognition.onend = () => {
    isListening = false;
    micBtn.classList.remove("listening");
    micIcon.textContent = "🎤";
    statusText.textContent = "اضغط على الميكروفون وابدأ الحديث";
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    statusText.textContent = "لم أستطع سماعك، حاول مرة أخرى";
  };

  recognition.onresult = async (event) => {
    const userText = event.results[0][0].transcript;
    if (!userText) return;

    addMessage("user", userText);
    const thinkingMessage = addMessage("bot", "...يفكر", { thinking: true });

    try {
      const reply = await askGemini(userText);
      thinkingMessage.remove();
      addMessage("bot", reply);
      speak(reply);
    } catch (error) {
      console.error("Server error:", error.message);
      thinkingMessage.remove();
      addMessage("bot", "حدث خطأ أثناء الاتصال بالخادم. حاول مجددًا.");
    }
  };
}

async function askGemini(prompt) {
  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ prompt }).toString(),
  });

  const responseText = await response.text();
  let data;

  try {
    data = JSON.parse(responseText);
  } catch {
    throw new Error("The server did not return valid JSON.");
  }

  if (!response.ok) {
    throw new Error(data.error || `Request failed with status ${response.status}.`);
  }

  if (!data.reply) {
    throw new Error("The server returned no reply.");
  }

  return data.reply;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LANG;
  utterance.rate = 1;
  window.speechSynthesis.speak(utterance);
}

function addMessage(role, text, options = {}) {
  const message = document.createElement("div");
  message.className = `message ${role}${options.thinking ? " thinking" : ""}`;

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  message.appendChild(paragraph);

  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
  return message;
}
