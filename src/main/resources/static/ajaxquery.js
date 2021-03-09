$('.teacher-heading').innerHTML="info";
$(document).ready(function() {
    $.ajax({
        url: "http://api.github.com/users/jarltuxen"
    }).then(function(data) {
        $('.teacher-id').append(data.id);
        $('.teacher-name').append(data.name);
        $('.teacher-email').append(data.company);
    });
});