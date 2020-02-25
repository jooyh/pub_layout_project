function tabEvt(el, num){
    var num = num || 0;
    var menu = $(el).children();
    var con = $(el + 'Con').children();
    var selectItem = $(menu).eq(num);
    var i = num;

    selectItem.addClass('active');
    con.eq(num).addClass('current');

    menu.click(function(){
        if(selectItem !== null){
            selectItem.removeClass('active');
            con.eq(i).removeClass('current');
        }

        selectItem = $(this);	
        i = $(this).index();

        selectItem.addClass('active');
        con.eq(i).addClass('current');
    });
  }
  
  tabEvt('#tab', 0);