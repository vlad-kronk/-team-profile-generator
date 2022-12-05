const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should have values for its name, ID, and email address when called with the 'new' keyword", () => {
            //assert
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            //act

            //evaluate? i forgot lol
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });
        it("should have a name equal to the name value specified in the constructor", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.name).toBe("Autumn");
        });
        it("should have an ID equal to the ID value specified in the constructor", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.id).toBe(1395);
        })
        it("should have an email equal to the email value specified in the constructor", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.email).toBe("ahoward@company.com");
        });
    });
    describe("Functionality", () => {
        it("should return the object's 'name' property when getName() is called", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.getName()).toEqual("Autumn");
        })
        it("should return the object's 'id' property when getID() is called", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.getID()).toEqual(1395);
        })
        it("should return the object's 'email' property when getEmail() is called", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.getEmail()).toEqual("ahoward@company.com");
        })
        it("should return 'Employee' when getRole() is called", () => {
            const obj = new Employee("Autumn", 1395, "ahoward@company.com");

            expect(obj.getRole()).toEqual("Employee");
        })
    })
})