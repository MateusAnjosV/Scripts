$('div.mobile_title.application_header').prepend('<meta http-equiv="content-type" content="text/html;charset=iso-8859-1" /> <meta name="author" content="www.frebsite.nl" /> <meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=yes" /> <meta name="robots" content="noindex, nofollow" /> <link type="text/css" rel="stylesheet" href="http://www.jqueryscript.net/demo/Slick-App-Like-Sliding-Menu-Plugin-With-jQuery-Mmenu/examples/examples.css" /> <link type="text/css" rel="stylesheet" href="http://www.jqueryscript.net/demo/Slick-App-Like-Sliding-Menu-Plugin-With-jQuery-Mmenu/mmenu.css" /> <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> <script type="text/javascript" src="http://www.jqueryscript.net/demo/Slick-App-Like-Sliding-Menu-Plugin-With-jQuery-Mmenu/jquery.mmenu.js"></script> <div id="page"><div id="header" style="background: transparent"> <a href="#menu" style=""></a></div> <nav id="menu"> <ul> <li><a href="/">Início</a></li> <li><a href="/portal">Portal</a></li> <li><a href="/memberlist">Membros</a></li> <li><a href="/profile?mode=editprofile">Perfil</a></li> <li><a href="/groups">Grupos</a></li> <li><a href="/privmsg?folder=inbox">MP</a></li> <li><a href="/login?logout">Sair</a></li> <li><a href="#" onclick="event.preventDefaut();">Fechar o menu</a></li> </ul> </nav> </div>>');   var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();    setTimeout(function() { $("nav#menu").mmenu();    }, 3000);