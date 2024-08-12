const sgMail = require('@sendgrid/mail')

const sendMail = async (email, dinamicData, templateId) => {
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    //normal email
    /*
    const msg = {
      to: `${email}`,
      from: process.env.OUTLOOK_EMAIL,
      subject: `${subject}`,
      text: `${text}`,
      html: `${html}`,
    };*/

    //email with template
    const msg = {
      to: `${email}`,
      from: process.env.OUTLOOK_EMAIL,
      templateId: `${templateId}`,
      dynamic_template_data: dinamicData,
    };
    
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        return "Email sent"
        
      })
      .catch((error) => {
        console.error(error);
        return error
        
      });
    
}

module.exports = sendMail