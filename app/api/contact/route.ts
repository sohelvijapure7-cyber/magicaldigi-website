import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, source } = body;

    // Basic validation
    if (!name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const serviceLabels: Record<string, string> = {
      "performance-marketing": "Performance Marketing",
      seo: "Search Engine Optimization",
      "social-media": "Social Media Branding",
      "website-development": "Website Development",
      other: "Other",
    };

    const serviceText = service ? (serviceLabels[service] ?? service) : "Not specified";
    const userEmail = email || "Not provided";
    const userMessage = message || (source === "popup" ? "Lead captured from Global Popup." : "No message provided.");
    const subjectTitle = source === "popup" ? `🚀 New Lead from Popup – ${name}` : `📩 New Contact Form Submission – ${name}`;

    // Email to MagicalDigi (notification)
    await transporter.sendMail({
      from: `"MagicalDigi Website" <${process.env.GMAIL_USER}>`,
      to: "magicaldigi@gmail.com",
      replyTo: email || process.env.GMAIL_USER,
      subject: subjectTitle,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background: linear-gradient(135deg, #f05a28, #ff8c42); padding: 28px 32px;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Lead – MagicalDigi Website</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">A visitor has filled out the ${source === "popup" ? "popup" : "contact"} form.</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #222; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;">${email ? `<a href="mailto:${email}" style="color: #f05a28; text-decoration: none; font-size: 14px;">${email}</a>` : "Not provided"}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #222; font-size: 14px;">${phone || "Not provided"}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Service</td>
                <td style="padding: 10px 0; color: #222; font-size: 14px;">${serviceText}</td>
              </tr>
              <tr style="border-top: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #222; font-size: 14px; line-height: 1.6;">${userMessage.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            ${email ? `
            <div style="margin-top: 24px; padding: 16px; background: #fff3ee; border-radius: 8px; border-left: 4px solid #f05a28;">
              <p style="margin: 0; font-size: 13px; color: #666;">You can reply directly to this email to respond to <strong>${name}</strong>.</p>
            </div>
            ` : ""}
          </div>
          <div style="padding: 20px 32px; background: #f0f0f0; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #999;">© ${new Date().getFullYear()} MagicalDigi · magicaldigi.com</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the user (wrapped in try-catch so it doesn't break the main flow if email is invalid)
    if (email) {
      try {
        await transporter.sendMail({
          from: `"MagicalDigi" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: `Thanks for reaching out, ${name}! – MagicalDigi`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden; border: 1px solid #e0e0e0;">
              <div style="background: linear-gradient(135deg, #f05a28, #ff8c42); padding: 28px 32px;">
                <h1 style="color: white; margin: 0; font-size: 22px;">We received your message!</h1>
              </div>
              <div style="padding: 32px;">
                <p style="color: #333; font-size: 15px; line-height: 1.7;">Hi <strong>${name}</strong>,</p>
                <p style="color: #555; font-size: 14px; line-height: 1.8;">
                  Thank you for contacting <strong>MagicalDigi</strong>. Our team has received your enquiry and will get back to you within <strong>24 hours</strong>.
                </p>
                <p style="color: #555; font-size: 14px; line-height: 1.8;">
                  In the meantime, feel free to explore our services at 
                  <a href="https://magicaldigi.com" style="color: #f05a28;">magicaldigi.com</a>.
                </p>
                <div style="margin-top: 24px; padding: 16px; background: #fff3ee; border-radius: 8px;">
                  <p style="margin: 0; font-size: 13px; color: #666;"><strong>Your enquiry:</strong><br>${userMessage.replace(/\n/g, "<br>")}</p>
                </div>
              </div>
              <div style="padding: 20px 32px; background: #f0f0f0; text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #999;">© ${new Date().getFullYear()} MagicalDigi · Ghatkopar East, Mumbai</p>
              </div>
            </div>
          `,
        });
      } catch (autoReplyErr) {
        console.warn("Failed to send auto-reply, but main email was sent:", autoReplyErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
