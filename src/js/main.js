$( document ).ready(function() {
   
    // animate hamburger
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
    // toggle responsive menu
    $(function() {                       //run when the DOM is ready
      $(".hamburger").click(function() {  //use a class, since your ID gets mangled
        $('.sidebar-nav').toggleClass("is-active");      //add the class to the clicked element
        $('body').toggleClass("no-scroll");  
      });
    });

    //tooltip
    $('.an-option').tooltip({
        container: 'body'
    });

    // daterange past transactions
    
    $(function() // on document.ready()
        {
            if ($('.transaction-list-').length) {
                $('input[name="startDate"').daterangepicker({
                    singleDatePicker: true,
                });
                $('input[name="endDate"').daterangepicker({
                    singleDatePicker: true,
                });
            }
        }
    );

    // signature pad
    $(function() // on document.ready()
        {
            if ($('#settings').length) {
                var canvas = document.querySelector("canvas");
                var signaturePad = new SignaturePad(canvas);

                // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
                signaturePad.toDataURL(); // save image as PNG
                signaturePad.toDataURL("image/jpeg"); // save image as JPEG
                signaturePad.toDataURL("image/svg+xml"); // save image as SVG

                // Draws signature image from data URL.
                // NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
                signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");

                // Returns signature image as an array of point groups
                const data = signaturePad.toData();

                // Draws signature image from an array of point groups
                signaturePad.fromData(data);

                // Clears the canvas
                signaturePad.clear();

                // Returns true if canvas is empty, otherwise returns false
                signaturePad.isEmpty();

                // Unbinds all event handlers
                signaturePad.off();

                // Rebinds all event handlers
                signaturePad.on();

                document.getElementById('clear').addEventListener('click', function () {
                    signaturePad.clear();
                });
            }
        }
    );
    


    
    /// EXECUTE SCRIPTS ON MOBILE ONLY
    if (Modernizr.mq('(min-height: 875px)')) {
        // FULL HEIGHT 
        $(function() {
            var winHeight = $(window).height();
            $('.login').css({
                'height': winHeight,
                'width': '100%'
            });
        });


    }

    if (Modernizr.mq('(max-width: 991px)')) {
        
    }

    if (Modernizr.mq('(max-width: 767px)')) {
      
    }


});
function init() {
  $('body').removeClass('fade-out');
}
window.onload = init();