const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { name, email, phone, message } = JSON.parse(event.body);

   const transporter = nodemailer.createTransport({
      service: 'gmail',
      port:465,
      secure: true,
      auth: {
        user:'websiteemailxx@gmail.com', // Gmail email from environment variable
        pass:'kzmi kqsu vztr sjzz', // Gmail app password from environment variable
      },
    });

  const mailOptions = {
      from: email, // sender's email (from request body)
      to: 'vk722413@gmail.com', // receiver's email
      subject: "Raise Query to Build Software", // email subject
      html: `
      <p><strong>Name:</strong> ${name}</p>
        <p><strong>User Message:</strong> ${message}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `, // HTML email body
    };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Mail sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
