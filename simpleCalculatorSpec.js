let tester  = require("../src/simpleCalculator1")

describe("addition",function(){
    it("should add two numbers",function(){
        let result = addition(1, 2);
        expect(result).toBe(3);
    })
    it("should add negative numbers",function(){
        let result = addition(-1,-1)
        expect(result).toBe(-2)
    })
    it("should add many numbers",function(){
        let result=AddMultipleNumbers(1,2,3,4,5)
        expect(result).toBe(15);
    })
})

describe("multiply",function(){
    it("should multiply two numbers",function(){
        let result = multiply(1,3);
        expect(result).toBe(3);
    })
    it("should multiply  a negative and positive number ",function(){
        let result = multiply(-1,3)
        expect(result).toBe(-3)
    })
    it("should multiply many numbers",function(){
        let result= multiplyMultipleNumbers(1,2,3,4,5)
        expect(result).toBe(120);
    })
})

