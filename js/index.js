
  $( "button" ).last().click(function() {
    $( ".sbutton" ).first().trigger( "click" );
    update( $( "span" ).last() );
  });
   
  function update( j ) {
    var n = parseInt( j.text(), 10 );
    j.text( n + 1 );
  }