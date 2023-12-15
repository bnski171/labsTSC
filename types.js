var num = 10;
var str = "Hi";
var bool = true;
// e) type assertion
var srtLenght = str.length;
// f)
var implicitVar = 42;
// g)
var nullValue = null;
var underfinedValue = undefined;
// h)
var unionType = 42;
unionType = "Hi";
// i)
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var color = Colors.Red;
