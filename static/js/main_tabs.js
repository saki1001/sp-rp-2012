$(document).ready(function() {
    
    // Showing current tab, hiding previous tab
    var showHideTabs = function() {
        
        var linkParentTab = $(this).parent('li');
        var mainTabId = '#' + $(this).attr('class');
        
        if(linkParentTab.hasClass('current')) {
            // Do nothing
            
        } else {
            // Hide previous tab
            $('#main .current').removeClass('current');
            
            // Set new current tab elements
            linkParentTab.addClass('current');
            $(mainTabId).addClass('current');
            
        }
        
        return false;
    };
    
    // Bind clicking on tab to show/hide tabs
    $('#main .tabs_nav a').bind('click', showHideTabs);
});