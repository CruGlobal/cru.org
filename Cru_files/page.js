/*
Author: Joe Tan (jtan@masterworks.com)
*/

if(!"console" in window){window.console={log:function(){}}}

jQuery.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

if (typeof isIE == 'undefined') isIE = false;


jQuery(function($) {
	if (!$.support.placeholder) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}
});

jQuery(function($) {
	$('img[align=right]').addClass('alignright');
	$('img[align=left]').addClass('alignleft');
	
	$('ul,ol').each(function(j,ul) {
		$(ul).find('> li').each(function(i,li) {
			$(li).addClass('nth-child-'+(i+1));
		});
		$(ul).find('> li:last').addClass('last');
	});
	
	$('blockquote').prepend('<span class="sq">&#8220;</span>').each(function(i, q) {
		var cite = $(q).find('cite');
		if (cite.length>0) {
			cite.before('<span class="eq">&#8221;</span>');
		} else {
			$(q).append('<span class="eq">&#8221;</span>');
		}
	});
	
	$('.layout').find('> .col:last').addClass('col-last').end().append('<div class="clear"></div>');
});

// drop down menu handlers
jQuery(function($) {
	if ( typeof(jQuery.fn.hoverIntent) == 'undefined' ) return;
	
	var nav = $('#nav');
	var navbg = $('<div id="nav-bg"></div>').appendTo('body');
	var opened = 0;
	var navWidth = null;
	var selectedNav = nav.find('> ul > li.selected');
	
	nav.find('.menu').wrapInner('<div class="inner"></div>');
	
	
	var maxWidth = $('#wrap').width();
		
	nav.find('li').not('.menu li').hoverIntent({
		sensitivity: 1, 
		interval:50,
		timeout: 500,
		over:function() {
			var m = $(this);
			var ul = m.find('> ul');
			if (ul.length > 0) {
				$(this).data('hasNav', true);
				showNav(m, ul);
			}
			
			var menu = m.find('> .menu');
			if (menu.length > 0) {
				
				menu.removeClass('pinned-right');
				var p = m.position();
				//var maxWidth = $('#wrap').width();
				if (p.left) {
					var test = p.left + menu.width()
					if (!isNaN(test) && (test > maxWidth)) {
						
						menu.addClass('pinned-right');
					}
				}
				
				m.addClass('hover has-menu');
				$.when(menu.slideDown(100)).then(function() {
					if (isIE) {
						var w = 0;
						menu.find('.col').each(function(i,col) {
							w = w + $(col).outerWidth();
						});
						if (w > 100) menu.width(w);
					}
					
				});
				
			}
			
		},
		out:function() {
			if ($(this).data('hasNav')) {
				opened = opened - 1;
			}
			if (opened <= 0) {
				opened = 0;
				if (selectedNav.length > 0) {
				showNav(selectedNav, selectedNav.find('> ul'), true);
				} else {
				navbg.removeClass('visible')
					.stop(true).animate({height:0}, {duration:100});
				}
			}
			$(this).removeClass('hover has-menu').find('ul:not(.fixed), .menu').not('.menu ul').hide().removeClass('opened');
		}
	}).each(function(i, li) {
		if ($(li).find('> ul').length > 0) {
			$(li).addClass('has-submenu');
		}
	})
	.end().end().addClass('initialized');
	
	nav.find('> ul > li').each(function(i, li) {
		if ($(li).find('> ul').length <= 0) {
			$(li).append('<ul></ul>');
		}
	});
	// initialize selected tab
	
	if (selectedNav.length > 0) {
		var timer = setTimeout(function() {
			showNav(selectedNav, selectedNav.find('> ul'), true);
		}, 1000);
		jQuery('body').bind('fonts_active', function() {
			clearTimeout(timer);
			setTimeout(function() {
				showNav(selectedNav, selectedNav.find('> ul'), true);
			}, 10);
		});
	}
	
	function showNav(m, ul, fixed) {
		if (m.length <= 0) return;

		if (!navWidth) {
			navWidth = nav.width();
		}
		if (!fixed) {
			opened = opened + 1;
		}
		var subnavWidth = ul.css({marginLeft:0}).width();
		
		var availOffset = navWidth - subnavWidth - 30;
		
		
		var p = m.position();
		var offsetLeft = (p.left + m.width() / 2) - (subnavWidth / 2);
		
		if (p.left > availOffset) {
			offsetLeft = availOffset;
		} else if (offsetLeft < 0) {
			offsetLeft = 0;
		}
		
		ul.css({marginLeft:offsetLeft});
		if (fixed) {
			m.addClass('fixed');
			ul.addClass('fixed');
		}
		var subnavHeight = ul.outerHeight();
		if (fixed) {
			navbg.addClass('visible')
			.stop(true).css({height:subnavHeight});
		} else {
			navbg.addClass('visible')
			.stop(true).animate({height:subnavHeight}, {duration:100});
		}
		m.addClass('hover');
		if (fixed) {
			ul.show().addClass('opened');
		} else {
			ul.slideDown(100).addClass('opened');
		}
		
		m.siblings().removeClass('hover')
			.find('ul').not('.menu ul')
			.hide().removeClass('opened');
	}
});


// sidebar tabs
jQuery(function($) {
	var sidebar = $("#sidebar");
	if (sidebar.length <= 0) return;
	
	sidebar.find('.box .tabs').each(function(i, obj) {
		$(obj).closest('.box').tabs({});
	});
});

// floating share box 
jQuery(function($) {
	var buttons = $('#social-buttons-article');
	if (buttons.length <= 0) {
		return;
	}
	var timer = null;
	$(window).scroll(function(){
		if (timer) clearTimeout(timer);
		
	    timer = setTimeout(function() {
			position_box();
	    }, 1);
	});
	
	function position_box() {
		if ($(window).scrollTop() > 162) {
			buttons.addClass('fixed');
		} else {
			buttons.removeClass('fixed');
		}
	}
	
});



