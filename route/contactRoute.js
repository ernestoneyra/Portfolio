const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({
      msg: "Vänligen fyll i alla fält",
    });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "ernestoneyra31@gmail.com",
      pass: "0Xf!les9",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "ernestoneyra31@gmail.com",
    subject: `Meddelande från ${data.name}`,
    html: `
        
        <h3>Information</h3>
        <ul>
        <li>Namn: ${data.name}</li>
        <li>Email: ${data.email}</li>
        </ul>
        <h3>Meddelande</h3>
        <p>${data.message}</p>

        `,
  };
  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "vänligen fyll i alla fält" });
      res.status(200).json({ msg: "Tack för ditt meddelande." });
    } catch (error) {
      if (error)
        return res.status(500).json({ msg: "Det blev problem med servern" });
    }
  });
});

module.exports = router;
