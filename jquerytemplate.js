

// wrapper function so the jquery works
$(document).ready(function(){


const QueryUrl = '{QueryUrl here}'; // Query url may not want to be hard coded in and take an input 



$.ajax({
    url:QueryUrl,
    method:"{Method Here i.e. GET}" //in jquery docs more options available etc
}).then(function(response){
    // do stuff with response here
})


}); //end of wrapper function no jquery outside of this