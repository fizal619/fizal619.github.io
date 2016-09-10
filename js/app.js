$(function(){

  console.log('loaded');

  //declare some stuff
  let languages = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python', 'Node.js', 'React.js', 'GIT', 'API', 'React Native', 'Ruby on Rails', 'Ruby', 'SQL'];


  //randomly spawn these then fade them out
  function drawLanguage(){
  	let language = Math.floor(Math.random()*languages.length);

  	//make the h2 element
  	let h2 = $('<h2>');
  	h2.text(languages[language]);
  	h2.addClass('language');

  	// determine the random x and y
  	var posX = Math.floor(Math.random() * ($('.first').width() - $('.first').width()/3 - 100 ));
    var posY = Math.floor(Math.random() * ($('.first').height() - 50));
    h2.css('left', posX + 'px');
    h2.css('top', posY + 'px');

    // append it
    $(h2).appendTo('.first').fadeIn(500).delay(2000).fadeOut(500, function() {
      $(this).remove();
    });

    //scroll
    // let projects = document.querySelector('#projects')
    // projects.scrollBy(100, 0);
    console.log('spawned')
  }

  setInterval(drawLanguage, 500);

  // scroll stuff
  function scroller(e){
    console.log('scroll!')

    var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
    };

    if(isMobile.any()){
      $('.first').remove()
    }

    $(this).off()

  }

  $('.second').scroll(scroller)



});
