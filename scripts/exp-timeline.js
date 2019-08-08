$(document).ready(function() {
    $('#templates').hide();
    
    // Create variables to hold timeline
}
                  

    
    // Run this sweet sweet timeline and get data              
    jsPsych.init({
        display_element: $('#jspsych-target'),
        timeline: exp_timeline,
        on_finish: function(){
            var data = jsPsych.data.getData();

            // DEBUG: Show data on browser
            //jsPsych.data.displayData();
            
            // PRODUCTION: Submit data thru mmturkey
            turk.submit(data);
        }
    });
));
                  