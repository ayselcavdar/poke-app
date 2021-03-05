import  {firstCharToUpperCase} from './firstCharToUpperCase';

test("capitalize", () => {
    expect(firstCharToUpperCase("aysel")).toBe("Aysel");
    expect(firstCharToUpperCase("john")).toBe("John");
    expect(firstCharToUpperCase("ron")).toBe("Ron");
    expect(firstCharToUpperCase("jane")).toBe("Jane");
})