export function weatherCard(code) {
    const weatherIcon = {
        sunny: `<i class="fa-solid fa-sun"></i>`,
        overcast: `<i class="fa-solid fa-cloud-sun"></i>`,
        fog: `<i class="fa-solid fa-smog"></i>`,
        drizzle: `<i class="fa-solid fa-cloud-sun-rain"></i>`,
        rain: `<i class="fa-solid fa-cloud-showers-heavy"></i>`,
        freezingRain: `<i class="fa-solid fa-cloud-meatball"></i>`,
        snow: `<i class="fa-solid fa-snowflake"></i>`,
        thunderStorm: `<i class="fa-solid fa-cloud-bolt"></i>`,
    };

    const result = {}

    switch (code) {
        case '0':
            result.icon = weatherIcon.sunny;
            break;
        case '1':
        case '2':
        case '3':
            result.icon = weatherIcon.overcast;
            break;
        case '45':
        case '48':
            result.icon = weatherIcon.fog;
            break;
        case '51':
        case '53':
        case '55':
        case '56':
        case '57':
            result.icon = weatherIcon.drizzle;
            break;
        case '61':
        case '63':
        case '65':
        case '80':
        case '81':
        case '82':
            result.icon = weatherIcon.rain;
            break;
        case '66':
        case '67':
            result.icon = weatherIcon.freezingRain;
            break;
        case '71':
        case '73':
        case '75':
        case '85':
        case '86':
        case '77':
            result.icon = weatherIcon.snow;
            break;
        case '95':
        case '96':
        case '99':
            result.icon = weatherIcon.thunderStorm;
            break;
    };
    return result
}