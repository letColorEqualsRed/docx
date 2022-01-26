// http://officeopenxml.com/drwSp-size.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { OffsetAttributes } from "./off-attributes";

@RegisterXmlComponent("Offset")
export class Offset extends XmlComponent {
    constructor() {
        super("a:off");

        this.root.push(
            new OffsetAttributes({
                x: 0,
                y: 0,
            }),
        );
    }
}
