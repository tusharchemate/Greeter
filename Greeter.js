(function (global, $) {
  var Greeter = function (firstName, lastName, language) {
    return new Greeter.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es", "mr"];

  var greetings = {
    en: "Hello",
    es: "Hola",
    mr: "नमस्ते",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
    mr: "नमस्कार",
  };

  var logMessages = {
    en: "Logged In",
    es: "Inicio Sesión",
    mr: "लॉग इन झाले",
  };

  Greeter.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },

    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function () {
      return formalGreetings[this.language] + " " + this.fullName + "!";
    },

    greet: function (formal) {
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // this refers to the calling object at execution time
      // make the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      // lets make this chainable
      return this;
    },
  };

  Greeter.init = function (firstName, lastName, language) {
    var self = this;
    (self.firstName = firstName || ""),
      (self.lastName = lastName || ""),
      (self.language = language || "en");
  };

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.G$ = Greeter;
})(window, jQuery);
