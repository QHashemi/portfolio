from fastapi import APIRouter
from pydantic import BaseModel
import asyncio
from utils.send_email import email_sender

router = APIRouter()


class SendEmail(BaseModel):
    first_name: str
    last_name: str
    email: str
    message: str
    class Config:
        from_attributes = True

@router.post("/send")
async def send_email(emailData: SendEmail):
    loop = asyncio.get_event_loop()
    await loop.run_in_executor(None, email_sender, emailData)
    return {"message": "The Email has been sent successfully!"}

