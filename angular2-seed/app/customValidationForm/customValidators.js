System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomValidators;
    return {
        setters:[],
        execute: function() {
            CustomValidators = (function () {
                function CustomValidators() {
                }
                CustomValidators.confirmPassMatch = function (cg) {
                    var newPass = cg.find('newPass').value, confirmPass = cg.find('confirmPass').value;
                    if (newPass !== confirmPass)
                        return { passwordMismatch: true };
                    return null;
                };
                return CustomValidators;
            }());
            exports_1("CustomValidators", CustomValidators);
        }
    }
});
//# sourceMappingURL=customValidators.js.map