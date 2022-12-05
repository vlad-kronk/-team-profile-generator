const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should have values for its name, ID, email address, and school when called with the 'new' keyword", () => {
            const obj = new Intern("Jacob", 1402, "jmeyers@company.com", "University of Washington");


            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });
        it("should have a 'school' value matching the one specified in the object's constructor call", () => {
            const obj = new Intern("Jacob", 1402, "jmeyers@company.com", "University of Washington");

            expect(obj.school).toEqual("University of Washington");            
        });
    });
    describe("Functionality", () => {
        it("should return the value of the 'school' property when getSchool() is called", () => {
            const obj = new Intern("Jacob", 1402, "jmeyers@company.com", "University of Washington");

            expect(obj.getSchool()).toEqual("University of Washington");
        });
        it("should return 'Intern' when getRole() is called", () => {
            const obj = new Intern("Jacob", 1402, "jmeyers@company.com", "University of Washington");

            expect(obj.getRole()).toEqual("Intern");
        })
    })
})