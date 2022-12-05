const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should have values for its name, ID, email address, and officeNumber when called with the 'new' keyword", () => {
            const obj = new Manager("Jacob", 1402, "jmeyers@company.com", 201);


            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        });
        it("should have a 'officeNumber' value matching the one specified in the object's constructor call", () => {
            const obj = new Manager("Jacob", 1402, "jmeyers@company.com", 201);

            expect(obj.officeNumber).toEqual(201);            
        });
    });
    describe("Functionality", () => {
        it("should return the value of the 'officeNumber' property when getOfficeNumber() is called", () => {
            const obj = new Manager("Jacob", 1402, "jmeyers@company.com", 201);

            expect(obj.getOfficeNumber()).toEqual(201);
        });
        it("should return 'Manager' when getRole() is called", () => {
            const obj = new Manager("Jacob", 1402, "jmeyers@company.com", 201);

            expect(obj.getRole()).toEqual("Manager");
        })
    })
})