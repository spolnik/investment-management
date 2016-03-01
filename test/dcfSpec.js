var expect = require('chai').expect;
var dcf = require('../priceOfShareValuationBasedOnDcf');

describe("DCF", function () {

    var tests = [
        {
            cashFlows: [100, 110, 120, 127, 134],
            growingAtConstantRate: 0.04,
            weightedAverageCostOfCapital: 0.12,
            debt: 500,
            shares: 100,
            expected: "9.08"
        }
    ];

    tests.forEach(function (test) {
        it('returns price of one share ' + test.expected +
            ' for free cash flows (USD million) ' + test.cashFlows +
            ', growing at constant rate' + test.growingAtConstantRate +
            ', firm\'s weighted average cost of capital ' + test.weightedAverageCostOfCapital +
            ', debt (USD million) ' + test.debt +
            ', outstanding shares (million) ' + test.shares, function () {

            var priceOfOneShare = dcf(test.cashFlows, test.growingAtConstantRate, test.weightedAverageCostOfCapital, test.debt, test.shares);

            expect(priceOfOneShare).to.equal(test.expected);
        });
    });

});