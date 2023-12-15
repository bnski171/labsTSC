

let num: number = 10;
let str: string = "Hi";
let bool: boolean = true;

// e) type assertion

let srtLenght: number = (str as string).length;

// f)

let implicitVar = 42;

// g)

let nullValue: string | null = null;
let underfinedValue: number | undefined = undefined;

// h)

let unionType: number | string = 42;
unionType = "Hi";

// i)

enum Colors {
    Red,
    Green,
    Blue
}

let color: Colors = Colors.Red;