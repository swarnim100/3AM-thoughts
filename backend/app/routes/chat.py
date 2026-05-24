from fastapi import APIRouter
from pydantic import BaseModel

from app.services.openai_service import generate_response

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(request: ChatRequest):
    ai_reply = generate_response(request.message)
    return {"reply": ai_reply}
