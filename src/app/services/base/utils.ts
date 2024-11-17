export default class Utils {
    /**
     * Verifica si un valor está vacío.
     * Considera como "vacío" los valores: null, undefined, string vacío, array vacío, objeto vacío, y NaN.
     * 
     * @param {*} value - El valor a verificar si está vacío.
     * @returns {boolean} - Retorna `true` si el valor está vacío, de lo contrario `false`.
     */
    static isEmpty(value: any) {
        // Verificar si el valor es null o undefined
        if (value === null || value === undefined) {
            // Si es null o undefined, se considera vacío
            return true;
        }

        // Verificar si el valor es un string vacío (incluyendo solo espacios)
        if (typeof value === 'string' && value.trim() === '') {
            // Si es un string y está vacío después de eliminar los espacios, se considera vacío
            return true;
        }

        // Verificar si el valor es un array vacío
        if (Array.isArray(value) && value.length === 0) {
            // Si es un array y su longitud es 0, se considera vacío
            return true;
        }

        // Verificar si el valor es un objeto vacío
        if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
            // Si es un objeto (no un array) y no tiene propiedades, se considera vacío
            return true;
        }

        // Verificar si el valor es NaN (Not-a-Number)
        if (typeof value === 'number' && isNaN(value)) {
            // Si es un número y resulta ser NaN, se considera vacío
            return true;
        }

        // Si ninguna de las condiciones anteriores se cumple, el valor no está vacío
        return false;
    }
}


