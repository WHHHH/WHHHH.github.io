(function ($) {
    var $main = $('.search-form-wrap');
    var $input = $main.find('.ins-search-input');

    function search (json, keywords) {
        var posts = json.posts;
        var pages = json.pages;
        var result = [];

        posts.forEach(function(val){
            for(key in val){
                if(key == "title" && val[key].indexOf(keywords) > -1){
                    result.push(val);
                }
            }
        });
        
    }

    $.getJSON('/content.json', function (json) {

        $(document).on('input', '.ins-search-input', function () {
            var keywords = $(this).val();
            search(json, keywords)
        });


        $input.on('input', function () {
            var keywords = $(this).val();
        });
    });

})(jQuery);