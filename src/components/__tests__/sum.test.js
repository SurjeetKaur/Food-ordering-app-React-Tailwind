import {sum} from "../sum";
test("should show sum of two numbers",()=>{
    const result = sum(2,3);
    expect(result).toBe(5);
})