export function units() {
    const cmEqual = {
        kilometre: 100000,
        mile: 160934.4,
        metre: 100,
        centimetre: 1,
        millimetre: 0.1,
        micrometre: 0.0001,
        yard: 91.44,
        feet: 30.48,
        inch: 2.54,
        nauticalMile: 185200,
        furlong: 20116.8,
        lightYear: 94607304725808 * 10000
    }

    const secEqual = {
        year: 31536000,
        month: 2628000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
        millisecond: 0.001
    }

    const gramEqual = {
        kilogram: 1000,
        pound: 453.59237,
        gram: 1,
        milligram: 0.001,
        ounce: 28.349523125,
        "troy ounce": 31.1034768,
        grain: 0.06479891,
        stone: 6350.2932,
        ton: 1000000
    }

    const sqMEqual = {
        hectare: 10000,
        acre: 4046.856422,
        decre: 1000,
        are: 100,
        "sq kilometre": 1000000,
        "sq metre": 1,
        "sq centimetre": 0.0001,
        "sq millimetre": 0.000001,
        "sq mile": 2589988.110336,
        "sq yard": 0.83612736,
        "sq feet": 0.09290304,
        "sq inches": 0.00064516,
    }

    const kbEqual = {
        bit: 0.0001220703,
        byte: 0.0009765625,
        kilobit: 0.1249999872,
        kylobyte: 1,
        megabit: 127.9999868928,
        megabyte: 1024,
        gigabit: 131071.98657823,
        gigabyte: 1048576,
        terabit: 134217714.25611,
        terabyte: 1073741824
    }

    const kmphEqual = {
        kmph: 1,
        mps: 3.6,
        mph: 1.609344,
        fps: 1.09728,
        knot: 1.852
    }

    const mlEqual = {
        millilitre: 1,
        litre: 1000,
        "cubic cm": 1,
        "cubic metre": 1000000,
        "cubic inch": 16.387064,
        "cubic foot": 28316.846592,
        "cubic yard": 764554.857984,
        "fluid ounceUS": 29.5735,
        "fluid ounceUK": 28.4131,
        "pint US": 473.176473,
        "pint UK": 568.26125,
        "quart US": 946.352946,
        "quart UK": 1136.5225,
        "gallon US": 3785.411784,
        "gallon UK": 4546.09,
        "oil barrel": 158987.294928
    }

    return {
        length: cmEqual,
        time: secEqual,
        weight: gramEqual,
        area: sqMEqual,
        memory: kbEqual,
        speed: kmphEqual,
        volume: mlEqual
    };
}