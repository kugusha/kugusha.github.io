function setBackground () {
    var hex = $('#hex').val();
    if (hex.length === 1 && hex !== '#') { 
        $('#hex').val('#' + hex);
    } 

    if (hex.length <= 1) {
        document.body.style.background = "#EDB3B2";
    } 

    for (var i = 1; i < hex.length; ++i) {
        if((hex[i].match(/[0-9A-Fa-f]/g)) == null) {
            $("p").remove();
            $("<p>Invalid hex code</p>").appendTo(".error_m").fadeOut(3000);
            document.body.style.background = "#F9CDAE";
            $('#hex').val(hex.slice(0,-1));
        }  else {
            document.body.style.background = hex;
        }
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
