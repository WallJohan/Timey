function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
