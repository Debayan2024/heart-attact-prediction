document.getElementById("predictForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = parseFloat(document.getElementById("age").value);
    let sex = parseFloat(document.getElementById("sex").value);
    let cp = parseFloat(document.getElementById("cp").value);
    let restingbp = parseFloat(document.getElementById("restingbp").value);
    let cholesterol = parseFloat(document.getElementById("cholesterol").value);
    let fbs = parseFloat(document.getElementById("fbs").value);
    let ecg = parseFloat(document.getElementById("ecg").value);
    let maxhr = parseFloat(document.getElementById("maxhr").value);
    let angina = parseFloat(document.getElementById("angina").value);
    let oldpeak = parseFloat(document.getElementById("oldpeak").value);
    let slope = parseFloat(document.getElementById("slope").value);

    // -------- COEFFICIENTS (same as you provided) --------
    const coeff = {
        age: -0.01277740,
        sex: -1.43287664,
        cp: -0.00943439,
        restingbp: -0.00028843,
        cholesterol: -0.00250038,
        fbs: 0.31683856,
        ecg: -0.07929580,
        maxhr: -0.01928409,
        angina: -0.46663536,
        oldpeak: 0.62360119,
        slope: 0.48886556
    };

    const intercept = -0.68993813;

    // -------- LINEAR MODEL --------
    let linear =
        intercept +
        coeff.age * age +
        coeff.sex * sex +
        coeff.cp * cp +
        coeff.restingbp * restingbp +
        coeff.cholesterol * cholesterol +
        coeff.fbs * fbs +
        coeff.ecg * ecg +
        coeff.maxhr * maxhr +
        coeff.angina * angina +
        coeff.oldpeak * oldpeak +
        coeff.slope * slope;

    // -------- SIGMOID --------
    let probability = 1 / (1 + Math.exp(-linear));
    let prediction = probability > 0.5 ? "Heart Disease Likely" : "Heart Disease Unlikely";

    // -------- SHOW RESULT --------
    document.getElementById("result").innerHTML =
        `Prediction: <b>${prediction}</b><br>Probability: ${probability.toFixed(3)}`;
});