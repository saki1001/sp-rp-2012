$(document).ready(function() {
    
    // Showing active tab, hiding previous tab
    var showHideMenu = function() {
        
        var subMenu = $(this).children('.sub_menu');
        
        if($(this).hasClass('active')) {
            // Do nothing
        } else {
            // Hide previous element's sub_menu
            $('.active .sub_menu').slideUp(0);
            
            // Show current element's sub_menu
            subMenu.slideDown(100);
            
            // Remove previous element's active class
            $('.active').removeClass('active');
            
            // Add active class to current element
            $(this).addClass('active');
            
        }
        
    };
    
    var hideMenu = function() {
        
        var subMenu = $(this).children('.sub_menu');
        
        if($(this).hasClass('active')) {
            // Hide current element's sub_menu
            subMenu.slideUp(0);
            
            // Remove active class from current element
            $(this).removeClass('active');
            
        } else {
            // Do nothing
        }
        
    };
    
    // Bind hovering over sidebar links to tab activation
    $('header #navigation .menu').bind('mouseenter', showHideMenu);
    $('header #navigation .menu').bind('mouseleave', hideMenu);
});