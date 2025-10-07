const selectedDayInp1 = document.querySelector('#selectedDay1');
const display1 = document.querySelector('section');


selectedDayInp1.addEventListener('change',function() {
    const selectedDay1 = new Date(selectedDayInp1.value);
    display1.innerHTML = selectedDay1.toLocaleDateString
    ('pl-PL',{
        weekday: "long",
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
});
const selectedDayInp2 = document.querySelector('#selectedDay2');
const display2 = document.querySelector('section');

selectedDayInp2.addEventListener('change',function() {
    const selectedDay2 = new Date(selectedDayInp2.value);
    display2.innerHTML = selectedDay2.toLocaleDateString
    ('pl-PL',{
        weekday: "long",
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
});
if (selectedDay1.getTime()>selectedDay2.getTime()) {
const data1 = selectedDay2;
const data2 = selectedDay1;
const miliseconds1 = data1.getTime();
const miliseconds2 = data2.getTime();
roznica = miliseconds1 = miliseconds2;
document.getElementById('wynik').innerHTML('Różnica dni wynosi:' + roznica) / (1000*24*60*60);
}
else if (selectedDay1.getTime()<selectedDay2.getTime()) {
    const data1 = selectedDay2;
    const data2 = selectedDay1;
    const miliseconds1 = data1.getTime();
    const miliseconds2 = data2.getTime();
    roznica = miliseconds1 = miliseconds2;
    document.getElementById('wynik').innerHTML('Różnica dni wynosi:' + roznica) / (1000*24*60*60);
    }
    if (selectedDay1.getTime()=selectedDay2.getTime()) {
        const data1 = selectedDay2;
        const data2 = selectedDay1;
        const miliseconds1 = data1.getTime();
        const miliseconds2 = data2.getTime();
        roznica = miliseconds1 = miliseconds2;
        document.getElementById('wynik').innerHTML('Daty są takie same' + roznica) / (1000*24*60*60);
        }
