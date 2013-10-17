if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to Asset Manager.";
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
