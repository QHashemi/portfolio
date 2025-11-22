import smtplib
from email.mime.text import MIMEText
from pydantic import BaseModel
from email.mime.multipart import MIMEMultipart
from .email_template import email_template
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()


class SendEmail(BaseModel):
    first_name: str
    last_name: str
    email: str
    message: str


def email_sender(emailData: SendEmail):

    first_sender_email = os.getenv("FIRST_SENDER_EMAIL")
    sender_password = os.getenv("FIRST_SENDER_PASSWORD")
    second_sender_email = os.getenv("SECOND_SENDER_EMAIL")

    email_list = [
        first_sender_email,
        second_sender_email
    ]


    html_email = email_template(emailData.first_name, emailData.last_name, emailData.email, emailData.message)

    # Create email message
    
    with smtplib.SMTP("smtp.gmail.com", 587) as smtp:
        smtp.starttls()
        smtp.login(first_sender_email, sender_password)

        for destination in email_list:

            msg = MIMEMultipart("alternative")
            msg["Subject"] = f"Message from {emailData.first_name} {emailData.last_name}"
            msg["From"] = first_sender_email
            msg["To"] = destination

            # HTML part
            html_part = MIMEText(html_email, "html")

            msg.attach(html_part)

            smtp.sendmail(
                from_addr=first_sender_email,
                to_addrs=destination,
                msg=msg.as_string()
            )