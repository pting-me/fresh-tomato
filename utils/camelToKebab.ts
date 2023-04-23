type JsonObject = { [key: string]: JsonObject | string };

function keyToKebabCase(key: string): string {
  return key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function camelToKebab(obj: JsonObject): JsonObject {
  const snakeCaseObj: JsonObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = keyToKebabCase(key);

      if (
        typeof obj[key] === "object" && obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        snakeCaseObj[snakeKey] = camelToKebab(obj[key] as JsonObject);
      } else {
        snakeCaseObj[snakeKey] = obj[key];
      }
    }
  }

  return snakeCaseObj;
}
