export const UpdateObject = (obj:object, newObject:object) => ({
    ...obj,
    ...newObject,
  });