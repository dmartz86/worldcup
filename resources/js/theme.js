var Theme = {
  nav: {
    color : '#1111dd;' //#1111dd;
  },
  subnav: {
    top : '0;',
    home : '15px;'
  }
};

$('#subnav').ready(function() {
  $('.dnav-list').attr({style: 'color:' + Theme.nav.color});
  //prettify
  if($('#navbar').length == 0){
    $('#subnav').attr({style: 'margin-top:' + Theme.subnav.top});
  }
});

   