$(function () {
    $('#dateOfbirth').datepicker({
        dateFormat: 'dd-mm-yy',
        onClose: function () {
            //debugger;
            if ($('#dateOfbirth').val() == '') {
                $('#dateOfbirth').attr('placeholder', 'введіть дату');
            } else {
                parseDate($('#dateOfbirth').val());
            };
        }
    });
});
var dayName = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
function parseDate(stringValue) {
    var date = moment(stringValue, 'DD-MM-YYYY');
    var newDay = date.clone().add(20, 'year');
    var day = newDay.get('day');
    console.log(day);
    if (newDay.isValid()) {
        $('#parseDate').addClass('parse');
        document.getElementById('parseDate').innerHTML = "У 20 років ("+moment(newDay).format('DD-MM-YYYY')+") святкування вашого дня народження буде в : "+dayName[day];
    };
}

