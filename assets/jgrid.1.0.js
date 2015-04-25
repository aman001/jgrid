;(function($){
    $.fn.jgrid = function(){
        $("<h1/>",{text: "Hell Grid"} ).insertAfter(this);
        var columns = this.find("th");
        columns.each(function(i,k){
            console.log(i,$(k).addClass('jgrid-grey').append("&nbsp;<i class='fa fa-unsorted'></i>"));
        });
    };
}(jQuery));