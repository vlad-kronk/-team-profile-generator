const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should have values for its name, ID, email address, and github when called with the 'new' keyword", () => {
            const obj = new Engineer("Jacob", 1402, "jmeyers@company.com", "vlad-kronk");


            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        });
        it("should have a 'github' value matching the one specified in the object's constructor call", () => {
            const obj = new Engineer("Jacob", 1402, "jmeyers@company.com", "vlad-kronk");

            expect(obj.github).toEqual("vlad-kronk");            
        });
    });
    describe("Functionality", () => {
        it("should return the value of the 'github' property when getGithub() is called", () => {
            const obj = new Engineer("Jacob", 1402, "jmeyers@company.com", "vlad-kronk");

            expect(obj.getGithub()).toEqual("vlad-kronk");
        });
        it("should return 'engineer' when getRole() is called", () => {
            const obj = new Engineer("Jacob", 1402, "jmeyers@company.com", "vlad-kronk");

            expect(obj.getRole()).toEqual("Engineer");
        })
    })
})