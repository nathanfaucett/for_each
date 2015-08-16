var tape = require("tape"),
    forEach = require("..");


tape("forEach(object, callback[, thisArg]) executes a provided function once per object element", function(assert) {
    var count;

    count = 0;
    forEach([0, 1, 2, 3, 4], function() {
        count += 1;
    });
    assert.equals(count, 5);

    count = 0;
    forEach([0, 1, 2, 3, 4], function() {
        count += 1;
    });
    assert.equals(count, 5);

    assert.end();
});
