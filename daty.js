const selectedDayInp = document.querySelector('#selectedDay');
const display = document.querySelector('section');

selectedDayInp.addEventListener('change',function() {
    const selectedDay = new Date(selectedDayInp.value);
    display.innerHTML = selectedDay.toLocaleDateString
    ('pl-PL',{
        weekday: "long",
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
});
