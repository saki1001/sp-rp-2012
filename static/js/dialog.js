$(document).ready(function() {
    
    var closeDialog = function() {
        
        $('#dialog').fadeOut(300, function() {
            $(this).removeClass('active');
        });
        
        return false;
    };
    
    var showDialog = function(type, url) {
        
        if(type === 'outbound_link_alert') {
            // Set href with full URL
            $('#dialog #outbound_link').attr('href', url);
            
            // Truncate display URL
            if(url.length > 50) {
                url = url.substring(0,50) + '...';
            }
            // Insert display URL
            $('#dialog #outbound_link').text(url);
            
            // Show outbound link dialog
            $('.outbound_link_alert').addClass('active');
        }
        
        $('#dialog').fadeIn(300, function() {
            $(this).addClass('active');
        });
        
        return false;
    };
    
    var getUrl = function() {
        
        var type = 'outbound_link_alert';
        var url = $(this).attr('href');
        
        showDialog(type, url);
        
        return false;
    };
    
    // Bind any link with rel="external" to .outbound_link_alert
    $('a[rel="external"]').bind('click', getUrl);
    
    // Bind close button to hide dialog
    $('#dialog .close').bind('click', closeDialog);
});