/*
 Select To Select2 Plugin Main.
 */

(function($){

    // For Page Load
    replaceAllSelect2();

    // For Ajax
    $(document).ajaxComplete(function(event){
        replaceAllSelect2();
    });

    // For GET,POST Request
    $(window).load(function() {
        replaceAllSelect2();
    });

    // for all elements
    // $(document).click(function(event){
    //     replaceAllSelect2();
    // });

    // for all elements
    $(document).change(function(event){
        replaceAllSelect2();
    });


}(jQuery));

function replaceAllSelect2(){
    var elements = document.getElementsByTagName("select");

    for (i = 0; i < elements.length; i++) {

        if ($("#" + elements[i].id).hasClass('select2-hidden-accessible')) {
            continue;
        }
        var next = $("#" + elements[i].id).next()
        if (next.hasClass('toggle-multiselect') || next.hasClass('assign-to-me-link')) {
            next.attr('select_id', elements[i].id)
            next.on('click', function(evt) {
                setTimeout(function(){
                    $("#" + $(evt.currentTarget).attr('select_id')).select2({
                        width:"resolve",
                        placeholder: "",
                        allowClear: true,
                        language: navigator.language
                    });
                }, 0)
            })
        }

        // For not woroking 「width:resolve」
        if(elements[i].id == 'year'
        || elements[i].id == 'month'
        || elements[i].id == 'columns'
        || elements[i].id == 'settings_issuequery_query_id'
        || elements[i].id == 'block-select'){

            $("#" + elements[i].id).select2({
                width:"175px",
                allowClear: true,
                language: navigator.language
            });
        }
        else if (elements[i].id == 'available_c' || elements[i].id == 'selected_c') {
            //do nothing, fix incorrect display
        } else {
            // For All Pages
            $("#" + elements[i].id).select2({
                width:"200px",
                allowClear: true,
                language: navigator.language
            });
        }
    }

}
