// http://officeopenxml.com/drwSp-size.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { ExtentsAttributes } from "./extents-attributes";

@RegisterXmlComponent("Extents")
export class Extents extends XmlComponent {
    private readonly attributes: ExtentsAttributes;

    constructor(x: number, y: number) {
        super("a:ext");

        this.attributes = new ExtentsAttributes({
            cx: x,
            cy: y,
        });

        this.root.push(this.attributes);
    }
}
