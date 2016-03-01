var priceOfShareValuationBasedOnDcf = function(cashFlows, growingAtConstantRate, weightedAverageCostOfCapital, debt, shares) {

    var enterpriseValue = 0.0;

    var N = cashFlows.length;


    var terminalValue = function (lastCashFlow) {
        return (1 + growingAtConstantRate) /
            (weightedAverageCostOfCapital - growingAtConstantRate) * lastCashFlow;
    };

    for (var t = 1; t <= N; t++) {

        var numerator = function (i) {
            if (i === N) {
                var lastCashFlow = cashFlows[i-1];
                return numerator = lastCashFlow + terminalValue(lastCashFlow);
            } else {
                return numerator = cashFlows[i-1];
            }
        };

        enterpriseValue += numerator(t) / Math.pow(1 + weightedAverageCostOfCapital, t);
    }

    var priceOfShare = (enterpriseValue - debt) / shares;
    return priceOfShare.toFixed(2);
};

module.exports = priceOfShareValuationBasedOnDcf;