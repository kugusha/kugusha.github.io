function setBackground () {
    var hex = $('#hex').val();
    if (hex.length <= 1) {
        document.body.style.background = "#EDB3B2"; 
    }

    if (hex.length >= 1) {
        if((hex[hex.length - 1].match(/[0-9A-Fa-f]/g)) == null) {
            console.log('error');
            $("p").remove();
            $("<p>Invalid hex code</p>").appendTo(".error_m").fadeOut(3000);
            document.body.style.background = "#F9CDAE";
            hex = hex.slice(0, hex.length - 1);
            $('#hex').val(hex);
        } else {
            document.body.style.background = hex;
        }
    }

    if (hex.length === 1 && hex !== '#') { 
        hex = $('#hex').val('#' + hex);
    }    
}

$(window).on('load', function TitleChange () {
      var message = "Don't forget to check it...";
      var original;

      $(window).focus(function() {
          if (original) {
              document.title = original;
          }

      }).blur(function() {
          var title = $('title').text();
          if (title != message) {
                original = title;
          }
          document.title = message;
      });
})
