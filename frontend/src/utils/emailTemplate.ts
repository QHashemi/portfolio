export function generateContactEmail({
  first_name,
  last_name,
  email,
  message,
}: {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Message</title>
      <style>
        body {
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #f8fafc;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .header {
          background-color: #111827;
          color: #fff;
          padding: 20px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          margin-bottom: 10px;
        }
        .details p {
          margin: 5px 0;
          font-size: 15px;
        }
        .message {
          background-color: #f3f4f6;
          padding: 15px;
          border-radius: 8px;
          margin-top: 10px;
          color: #444;
        }
        .footer {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          padding: 15px;
          border-top: 1px solid #e5e7eb;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📩 New Contact Message</h1>
        </div>
        <div class="content">
          <h2>Sender Information</h2>
          <div class="details">
            <p><strong>First Name:</strong> ${first_name}</p>
            <p><strong>Last Name:</strong> ${last_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <h2>Message</h2>
          <div class="message">
            <p>${message}</p>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent from your portfolio contact form.</p>
        </div>
      </div>
    </body>
  </html>
  `;
}
