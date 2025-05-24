import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

// Tests the isActivePath function, which checks if a given path is active based on the current URL.

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const currentPath = "/login/index.html";
    const href = "/login/index.html";
    const result = isActivePath(currentPath, href);
    expect(result).toBe(true);
  });

  it('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    const currentPath = "/";
    const href1 = "/";
    const href2 = "/index.html";
    const result1 = isActivePath(currentPath, href1);
    const result2 = isActivePath(currentPath, href2);
    expect(result1).toBe(true);
    expect(result2).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    const currentPath = "/login/index.html";
    const href = "/login";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const currentPath = "/register/index.html";
    const href = "/venue";
    const result = isActivePath(currentPath, href);
    expect(result).toBe(false);
  });
});
