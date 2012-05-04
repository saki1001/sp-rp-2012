$(document).ready(function() {
    
    var activateTab = function() {
        
        $('.tab.active').removeClass('active');
        
        var linkParentTab = $(this).parent('h3').parent('.tab');
        var mainTabId = '#' + $(this).attr('rel');
        
        linkParentTab.addClass('active', 1000);
        $(mainTabId ).addClass('active', 1000);
        
        
        console.log(linkParentTab);
        console.log($('.tab.active'));
    };
    
    
    $('#home #sidebar .tab a').bind('click', activateTab);
});