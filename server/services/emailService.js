// Serviço de envio de emails (confirmação, notificações)
const sendEmail = (to, subject, content) => {
    console.log(`Enviando email para ${to}: ${subject}`);
    // Aqui você pode integrar com algum serviço como SendGrid, Mailgun etc.
  };
  
  module.exports = { sendEmail };
  