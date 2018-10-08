import { WIN, ANIMATE } from '../constants';

export default (function() {

  const containers = $('[data-stagger-show]');
  let array = [];
  containers.each((id,el) => {
    const item = $(el);
  	const show = () => {
  	  if (item.offset().top + item.outerHeight()/4 <= WIN.scrollTop() + WIN.outerHeight()) {
  	    WIN.off('scroll', show);
        if ( !item.hasClass(ANIMATE) ) 
          $(item).addClass(ANIMATE);
      }
    };
    show();
    WIN.on('scroll', show);
  });

})();
