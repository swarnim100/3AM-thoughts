import os
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

# Always load backend/.env regardless of cwd when uvicorn starts
_env_path = Path(__file__).resolve().parent.parent.parent / ".env"
load_dotenv(_env_path)

_api_key = os.getenv("OPENAI_API_KEY")
if not _api_key:
    raise RuntimeError(
        f"OPENAI_API_KEY is not set. Add it to {_env_path}"
    )

client = OpenAI(api_key=_api_key)

SYSTEM_PROMPT = """
You are an emotional recovery companion for people going through heartbreak,
rejection, loneliness and emotional pain.

Your goals:
- calm emotional spirals
- reduce impulsive decisions
- encourage healthy routines
- promote healing and self-respect
- avoid emotional dependency

Tone:
Warm, calm, emotionally intelligent, grounded and supportive.
"""


def generate_response(user_message: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_message},
        ],
        temperature=0.7,
        max_tokens=300,
    )
    return response.choices[0].message.content or ""
