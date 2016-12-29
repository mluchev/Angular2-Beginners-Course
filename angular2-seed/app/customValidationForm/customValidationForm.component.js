System.register(['angular2/core', 'angular2/common', './customValidators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, customValidators_1;
    var CustomValidationFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (customValidators_1_1) {
                customValidators_1 = customValidators_1_1;
            }],
        execute: function() {
            CustomValidationFormComponent = (function () {
                function CustomValidationFormComponent(fb) {
                    var that = this;
                    this.changePasswordForm = fb.group({
                        currentPass: ['', common_1.Validators.required],
                        newPass: ['', common_1.Validators.required],
                        confirmPass: ['', common_1.Validators.required]
                    }, {
                        validator: customValidators_1.CustomValidators.confirmPassMatch
                    });
                }
                //Validators.compose([v1, v2]),
                //Validators.composeAsync([v3, v4])
                CustomValidationFormComponent.prototype.submitForm = function () {
                    var insertedCurrentPass = this.changePasswordForm.find('currentPass'), actualCurrentPass = '1111';
                    if (insertedCurrentPass.value !== actualCurrentPass) {
                        insertedCurrentPass.setErrors({ wrongCurrentPass: true });
                    }
                    if (this.changePasswordForm.valid) {
                        alert('Form submitted successfully!');
                    }
                    console.log(this.changePasswordForm);
                };
                CustomValidationFormComponent = __decorate([
                    core_1.Component({
                        selector: 'custom-validation-form',
                        templateUrl: 'app/customValidationForm/customValidationForm.template.html',
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], CustomValidationFormComponent);
                return CustomValidationFormComponent;
            }());
            exports_1("CustomValidationFormComponent", CustomValidationFormComponent);
        }
    }
});
//# sourceMappingURL=customValidationForm.component.js.map