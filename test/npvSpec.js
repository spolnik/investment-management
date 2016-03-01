var npv = require('../npv');
var expect = require('chai').expect;

describe('NPV', function () {

    var tests = [
        {cashFlows: [-150, 20, 50, 70, 70], discount: 0.10, expected: "9.91"},
        {cashFlows: [100, -90, 20, -90, 40], discount: 0.10, expected: "-5.59"}
    ];

    tests.forEach(function (test) {
        it('returns net present value ' + test.expected + ' for [' + test.cashFlows + '] cashflows, and discount ' + test.discount * 100 + '%', function () {

            var npvValue = npv(test.discount, test.cashFlows);

            expect(npvValue).to.equal(test.expected);
        });
    });
});