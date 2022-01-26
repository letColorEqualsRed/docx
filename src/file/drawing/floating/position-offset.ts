// http://officeopenxml.com/drwPicFloating-position.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("PositionOffset")
export class PositionOffset extends XmlComponent {
    constructor(offsetValue: number) {
        super("wp:posOffset");
        this.root.push(offsetValue.toString());
    }
}
