Meteor.methods({
    sendMessage: function() {
      console.log("Ping!");
      console.log(process.env.MAIL_URL);
      Email.send({
        from: "me@brentjanderson.com",
        to: "me@brentjanderson.com",
        subject: "Test message",
        text: "Another message body"
      });
    }
  });