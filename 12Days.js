var day = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Nineth', 'Tenth', 'Eleventh', 'Twelfth']
function TheTwelveDaysOfChristmas (days){
    for (var i = 0; i <days.length; i++){
        var refrain = "On the "+days[i]+ " day of Christmas, my true love gave to me...\n\n";
        var day = days[i];
        if (i === 0){
            var firstDay = true;
        }
        else {
            var firstDay = false;
        }
        var gifts = "";
        gifts += refrain;
        switch (day) {
            case "Twelfth":
                gifts += "Twelve Drummers Drumming,\n"
            case "Eleventh":
                gifts += "Eleven Pipers Piping,\n"
            case "Tenth":
                gifts += "Ten Lords a Leaping,\n"
            case "Nineth":
                gifts += "Nine Ladies Dancing,\n"
            case "Eighth":
                gifts += "Eight Maids a Milking,\n"
            case "Seventh":
                gifts += "Seven Swans a Swimming,\n"
            case "Sixth":
                gifts += "Six Geese a Laying,\n"
            case "Fifth":
                gifts += "FIVE GOOOOOOOOOOOOOOOLD RIIIIIIIINGS,\n"
            case "Fourth":
                gifts += "Four Calling Birds,\n"
            case "Third":
                gifts += "Three French Hens,\n"
            case "Second":
                gifts += "Two Turtle Doves,\n"
            case "First":
                gifts += firstDay ? "A Partridge in a Pear Tree!" : "and a Partridge in a Pear Tree!";

            default:
                break;
        }
        alert(gifts);

    }
}; 

TheTwelveDaysOfChristmas(day);
