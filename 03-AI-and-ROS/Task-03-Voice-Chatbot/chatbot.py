import sounddevice as sd
import whisper
import cohere
from getpass import getpass
from gtts import gTTS
from playsound3 import playsound

seconds = 5
sample_rate = 16000

api_key = getpass("Paste your Cohere API key: ")
co = cohere.ClientV2(api_key=api_key)

print("Loading Whisper...")
model = whisper.load_model("base")

print("Speak now...")
audio = sd.rec(
    int(seconds * sample_rate),
    samplerate=sample_rate,
    channels=1,
    dtype="float32"
)

sd.wait()
audio = audio.flatten()

result = model.transcribe(audio, fp16=False)
user_text = result["text"].strip()

print("You said:", user_text)

if user_text == "":
    print("No speech detected.")
else:
    response = co.chat(
        model="command-a-plus-05-2026",
        messages=[
            {
                "role": "system",
                "content": "Always reply in English using one short sentence."
            },
            {
                "role": "user",
                "content": user_text
            }
        ]
    )

    reply = response.message.content[-1].text
    print("Chatbot:", reply)

    voice_language = "en"

    voice = gTTS(text=reply, lang=voice_language)
    voice.save("reply.mp3")
    playsound("reply.mp3")