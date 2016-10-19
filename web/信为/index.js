function menuRight() {
var $menuRight = $('.menuRight');
    $div=$menuRight.find('div');
    $div.on('mouseover',function(){
        $ul=$div.find('ul');
            $ul.show();
    });
}
menuRight();
