$(document).ready(function() {
    
    // Showing current tab, hiding previous tab
    var activateTab = function() {
        
        var linkParentTab = $(this).parent('h3').parent('.tab');
        var mainTabId = '#' + $(this).attr('class');
        
        if(linkParentTab.hasClass('current')) {
            // Do nothing
            
        } else {
            // Define previous tab elements
            $('.tab.current').addClass('previous');
            
            // Hide previous tab elements first
            $('#sidebar .tab.previous').removeClass('current previous');
            $('#main .tab.previous').fadeOut(100).removeClass('current previous');
            
            // Set new current tab elements
            // Note: can't fade in linkParentTab because style
            // change is based on background-image, not display
            linkParentTab.addClass('current');
            $(mainTabId).fadeIn(600).addClass('current');
            
            // // Hide previous tab elements last
            // // (after animation so fadeIn is graceful)
            // $('#sidebar .tab.previous').removeClass('current previous');
            // $('#main .tab.previous').delay(600).fadeOut(0).removeClass('current previous');
            
        }
        
    };
    
    // Bind hovering over sidebar links to tab activation
    $('#sidebar .tab a').bind('hover', activateTab);
});