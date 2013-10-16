if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to systemManager.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
      Meteor.call("sendMessage");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    //process.env.MAIL_URL = "smtp://me%40brentjanderson.com:el4Um-PMBHb7x673Ep7ByA@smtp.mandrillapp.com:587";
    process.env.MAIL_URL = "smtp://AKIAIZMZSLYYBCLF6V5Q:ApwbsjSwzXD1cBKmqTcB0tcvNxVS07XgZ16VyP%2FzR%2Fgf@email-smtp.us-east-1.amazonaws.com:465"
  });

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
  })
}
