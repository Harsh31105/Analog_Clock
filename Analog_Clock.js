setInterval(() => {
    let time = new Date(),
        htime = time.getHours(),
        mtime = time.getMinutes(),
        stime = time.getSeconds(),
        hrotation = 30 * htime + mtime / 2,
        mrotation = 6 * mtime,
        srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);