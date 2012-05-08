$(document).ready(function() {
    
    // Showing current tab, hiding previous tab
    var showHideTabs = function() {
        
        var linkParentTab = $(this).parent('li');
        var mainTabId = '#' + $(this).attr('rel');
        
        if(linkParentTab.hasClass('current')) {
            // Do nothing
            
        } else {
            // Hide previous tab
            $('.current').removeClass('current');
            
            // Set new current tab elements
            linkParentTab.addClass('current');
            $(mainTabId).addClass('current');
            
        }
        
        return false;
    };
    
    // Bind hovering over sidebar links to tab activation
    $('#main .tabs_nav a').bind('click', showHideTabs);
});