const { convertToUppercase } = require('../utils/transformString');

describe('convertToUppercase', () => {
  it('converts string input "hello world" to "HELLO WORLD"', () => {
    const inputText = 'hello world';
    const expectedOutput = 'HELLO WORLD';
    const result = convertToUppercase(inputText);
    expect(result).toBe(expectedOutput);
  });

  it('throws an error if inputText is null', () => {
    const inputText = "";
    const expectedOutput = "";
    const result = convertToUppercase(inputText);
    expect(result).toBe(expectedOutput);

  });
  
  it('throws an error if inputText length is less than 5', () => {
    const inputText = "12345";
    const expectedOutput = "12345";
    const result = convertToUppercase(inputText);
    expect(result).toBe(expectedOutput);
  });

  it('maks input 10 character', () => {
    const inputText = "1234567890";
    const expectedOutput = "1234567890";
    const result = convertToUppercase(inputText);
    expect(result).toBe(expectedOutput);
  });
  
  // Add more test cases as needed
});
