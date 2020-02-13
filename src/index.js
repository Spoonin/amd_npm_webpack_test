define(["require","./amd_module", "jquery"], function(require) {
    var print = require("./amd_module");
    print();

    var $ = require("jquery");
    
    $("#jq_test").html("jQuery loaded!")

});