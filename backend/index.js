const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/buy", async (req, res) => {
  const data = req.body;
  const TotalToPay = data.Tickets * 120 + data.halfTickets * 60;
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  let mailDetails = {
    from: process.env.EMAIL,
    to: data.email,
    subject: "Ingressos CyberPark",
    text: `Olá!!Obrigado por comprar conosco, agradecemos a preferência.\nEntradas:${data.Tickets}\nMeia Entrada:${data.halfTickets}\nTotal:${TotalToPay}\n*IMAGINE AQUI UM BOLETO LINDO PARA VOCÊ PAGAR, A DIRETORIA AGRADECE*`,
  };
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs" + err);
    } else {
      console.log("Email sent successfully");
    }
  });
  res.json(data);
});

app.listen("3333", () => {
  console.log("Hi, I'm up");
});
