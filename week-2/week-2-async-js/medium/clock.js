let s = 0, m = 0, h = 0;
let time = "am";

function clock() {
    s++;
    if (s > 60) {
        m++;
        s = 0;
        if (m > 60) {
            h++;
            m = 0;
            if (h > 12) {
                h = 0;
                time == "am" ? "pm" : "am";

            }
        }
    }

    console.log(`${h} : ${m} : ${s} : ${time}`)
    setTimeout(clock, 1000);
}

clock();

