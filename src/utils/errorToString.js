export function errorToString(error) {
    if (error instanceof Error) {
        return error.toString();
    }
    if (typeof error === 'string') {
        return error;
    }
    if (error && typeof error === 'object' && error.message) {
        return String(error.message);
    }
    try {
        return JSON.stringify(error);
    } catch {
        return String(error);
    }
}