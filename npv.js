var npv = function(discount, cashFlows) {

    var npv = 0.0;

    for (var t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + discount, t);
    }

    return npv.toFixed(2);
};

module.exports = npv;