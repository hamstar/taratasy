/**
 * Javascript for Taratasy template
 * For future use!
 *
 * @author Symon Bent <hendrybadao@gmail.com>
 *
 */

var tpl_taratasy = (function() {

    // public methods/properties
    var pub = {};

    // private vars


    /**
     * initialize everything
     */
    pub.init = function() {
        jQuery("#add_page").click( function() {
            
            if ( !(name = prompt("Enter the page name")) )
                return false;

            if ( name == "" )
                return false;

            if ( name == null )
                return false;

            location.href = "/doku.php?id="+name+"&do=edit";
        });
    };

    // return only public methods/properties
    return pub;
})();

jQuery(function() {
    tpl_taratasy.init();
});
