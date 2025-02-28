import { hexColorValue } from "file/values";
import { RegisterXmlComponent } from "converter/decorators"
import { Attributes, XmlComponent } from "file/xml-components";

export enum UnderlineType {
    SINGLE = "single",
    WORDS = "words",
    DOUBLE = "double",
    THICK = "thick",
    DOTTED = "dotted",
    DOTTEDHEAVY = "dottedHeavy",
    DASH = "dash",
    DASHEDHEAVY = "dashedHeavy",
    DASHLONG = "dashLong",
    DASHLONGHEAVY = "dashLongHeavy",
    DOTDASH = "dotDash",
    DASHDOTHEAVY = "dashDotHeavy",
    DOTDOTDASH = "dotDotDash",
    DASHDOTDOTHEAVY = "dashDotDotHeavy",
    WAVE = "wave",
    WAVYHEAVY = "wavyHeavy",
    WAVYDOUBLE = "wavyDouble",
}

@RegisterXmlComponent("Underline")
export class Underline extends XmlComponent {
    constructor(underlineType: UnderlineType = UnderlineType.SINGLE, color?: string) {
        super("w:u");
        this.root.push(
            new Attributes({
                val: underlineType,
                color: color === undefined ? undefined : hexColorValue(color),
            }),
        );
    }
}
