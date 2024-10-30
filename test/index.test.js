const generateUUID = require("../index");

test("Generates a valid UUID v4", () => {
  const uuid = generateUUID();
  expect(uuid).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/
  );
});
