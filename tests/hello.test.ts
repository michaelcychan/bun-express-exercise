import {describe, test, expect} from "bun:test";
import {hello} from '../src/hello'

describe("hello", () => {
  test("should return hello world", () => {
    const params = {}
    expect(hello(params)).toBe("Hello World!");
  });
  test('should return hello with give name', () => {
    const params = {
      name: 'bun'
    }
    expect(hello(params)).toBe("Hello bun!");
  });
  test('should return hello world if name is number', () => {
    const params = {
      name: '123'
    }
    expect(hello(params)).toBe("Hello World!");
  });
  test('should return hello world of name is empty', () => {
    const params = {
      name: ''
    }
    expect(hello(params)).toBe("Hello World!");
  })
  test('should remove all numbers from name', () => {
    const params = {
      name: 'b1u3n123'
    }
    expect(hello(params)).toBe("Hello bun!");
  })
})