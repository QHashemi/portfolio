import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateContactEmail } from "@/utils/emailTemplate";

export async function POST(req: Request) {
    try {
        const values = await req.json();
        const { email, first_name, last_name, message } = values;

        // Create transporter (Gmail SMTP)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Send the email
        const info = await transporter.sendMail({
            from: `"${first_name} ${last_name}" <${process.env.SMTP_USER}>`, // must match your Gmail
            to: `${process.env.FIRST_EMAIL}, ${process.env.SECOND_EMAIL}`,
            subject: "📬 New Contact Message from Portfolio",
            html: generateContactEmail({ first_name, last_name, email, message }),
        });


        // Return success response
        return NextResponse.json({
            success: true,
            message: "Thank you for your trust! Your message has been sent successfully.",
        });

    } catch (error: any) {
        console.error("Email error:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
