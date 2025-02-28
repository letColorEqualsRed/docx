// http://officeopenxml.com/drwPicFloating-textWrap.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";
import { ITextWrapping, TextWrappingSide } from ".";
import { IDistance } from "../drawing";
import { IMargins } from "../floating";

interface IWrapSquareAttributes extends IDistance {
    readonly wrapText?: TextWrappingSide;
}

class WrapSquareAttributes extends XmlAttributeComponent<IWrapSquareAttributes> {
    protected readonly xmlKeys = {
        distT: "distT",
        distB: "distB",
        distL: "distL",
        distR: "distR",
        wrapText: "wrapText",
    };
}

@RegisterXmlComponent("WrapSquare")
export class WrapSquare extends XmlComponent {
    constructor(
        textWrapping: ITextWrapping,
        margins: IMargins = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    ) {
        super("wp:wrapSquare");

        this.root.push(
            new WrapSquareAttributes({
                wrapText: textWrapping.side || TextWrappingSide.BOTH_SIDES,
                distT: margins.top,
                distB: margins.bottom,
                distL: margins.left,
                distR: margins.right,
            }),
        );
    }
}
