export const omitKeyBy = (object: object, callback: (key: string) => boolean): object => {
    if (typeof object !== 'object')
        return object;

    if (!!!object)
        return object;

    const newObject: any = {
        ...object
    }

    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (callback(key))
            delete newObject[key];
        else if (Array.isArray(newObject[key])) {
            newObject[key] = newObject[key].map((x: any) => omitKeyBy(x, callback));
        } else {
            newObject[key] = omitKeyBy(newObject[key], callback);
        }
    }

    return newObject;
}