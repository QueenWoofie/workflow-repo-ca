import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

// Tests the getUsername function, which retrieves the username from local storage.

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("test that it returns the name from the user object in storage", () => {
    const user = { name: "QueenWoofie" };
    localStorage.setItem("user", JSON.stringify(user));
    const result = getUsername();
    expect(result).toBe("QueenWoofie");
  });

  it("test that it returns null when no user exists in storage", () => {
    localStorage.removeItem("user");
    const result = getUsername();
    expect(result).toBe(null);
  });
});
