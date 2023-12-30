function handleArrayValues(input) {
  let result = "[";

  input.forEach((value, index) => {
    const returnValue = JSONstringify(value);

    // If value of array item is undefined, it should convert it to null
    if (typeof value === "undefined" || typeof returnValue === "undefined") {
      result += null;
    } else result += returnValue;

    if (index !== input.length - 1) result += ",";
  });

  result += "]";
  return result;
}

function hanldeObjectValues(input) {
  let result = "{";
  const keys = Object.keys(input);

  keys.forEach((key, index) => {
    // If value of object property is undefined,
    // it should remove the key/value pair from the object
    const value = input[key];
    if (typeof value === "undefined") {
      result = result.slice(0, result.length - 1);
      return;
    }

    result += `${JSONstringify(key)}:${JSONstringify(value)}`;

    if (index !== keys.length - 1) result += ",";
  });

  result += "}";
  return result;
}

function JSONstringify(input) {
  const inputType = typeof input;

  switch (inputType) {
    case "function":
    case "undefined":
      return undefined;

    case "number": {
      if (Number.isNaN(input)) return null;
      return input.toString();
    }

    case "boolean":
      return input.toString();

    case "string":
      return `"${input}"`;

    case "object": {
      if (input === null) return null;

      if (Array.isArray(input)) {
        return handleArrayValues(input);
      }

      return hanldeObjectValues(input);
    }
  }
}

function a() {
  console.log("a");
}

/* EDGE CASE:

When passing functions as a key in object, array 
JSON stringify preserves newline character. 
It is not included in the scope of this solution.
e.g. console.log(JSONstringify({ a: 2, b: ["a", undefined, a], [a]: 4 }));

*/

console.log(JSONstringify({ a: 2, b: ["a", a, undefined, 3], c: undefined }));
