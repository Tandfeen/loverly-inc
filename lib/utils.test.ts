import { cn } from "./utils"

describe("cn function", () => {
  it("should merge class names correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2")
    expect(cn("class1", { class2: true, class3: false })).toBe("class1 class2")
    expect(cn("class1", { class2: false }, "class3")).toBe("class1 class3")
  })

  it("should handle falsy values", () => {
    expect(cn("class1", null, undefined, false, "class2")).toBe("class1 class2")
  })

  it("should handle empty strings", () => {
    expect(cn("", "class1", "", "class2")).toBe("class1 class2")
  })
})

