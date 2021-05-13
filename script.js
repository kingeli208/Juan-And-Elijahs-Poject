let counter = 0;
$(".feeling-button").click(function() {
    let feeling = $(".your-feeling").val();
    let age = $(".your-age").val();
    counter = counter + 1;
    console.log(counter);
    $(".counter").text(counter);

    $(".list").append("<li> " + "You would be in this flim since your feeling " + feeling + "</li>");
    if (feeling === "Energetic" && age < 16) {
        $(".Energetic").fadeToggle();
    } else if (feeling === "Energetic" && age >= 16) {
        $(".Frisson").fadeToggle();
    } else if (feeling === "Lazy" && age >= 16) {
        $(".Lazy").fadeToggle();
    } else if (feeling === "Lazy" && age <16) {
        $(".Wickedness").fadeToggle();
    }

});

$(".Energetic").hide();

$(".Frisson").hide();


$(".Lazy").hide();

$(".Wickedness").hide();