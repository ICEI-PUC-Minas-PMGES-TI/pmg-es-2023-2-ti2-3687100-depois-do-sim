// package com.depoisdosim.depoisdosim.services;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.stereotype.Service;

// import com.depoisdosim.depoisdosim.models.Email;

// @Service
// public class EmailService {
    
//     @Autowired
//     private javaMailSender javaMailSender;

//     @Value("${spring.mail.username}")
//     private String sender;

//     public String sendMail(Email details) {
//         SimpleMailMessage mailMessage = new SimpleMailMessage();
//         mailMessage.setFrom(sender);
//         mailMessage.setTo(details.getRecipient());
//         mailMessage.setText(details.getMessageBody());
//         mailMessage.setSubject(details.getSubject());

//         javaMailSender.send(mailMessage);

//         return "Email sent successfully";
//     }   

// }
