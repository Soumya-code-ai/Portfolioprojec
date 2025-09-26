// Smooth scrolling for nav links
$(document).on('click','a.nav-link',function(e){
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 70
    }, 600);
  }
});

// Demo contact form handler
$('#contactForm').on('submit', function(e){
  e.preventDefault();
  $('#formAlert').html(
    '<div class="alert alert-success">Thanks! Message sent (demo only).</div>'
  );
  this.reset();
});
