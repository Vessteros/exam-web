export function empty(array: any): boolean {
    return !(isArray(array) && array.length !== 0);
}

export function isArray(item: any): boolean {
    return item instanceof Array;
}

export function isUndefined(item: any): boolean {
    return item === undefined;
}

export function isNull(item: any): boolean {
    return item === null;
}

export function exists(item: any): boolean {
    return !isNull(item) && !isUndefined(item);
}