// http://officeopenxml.com/drwPicFloating-position.php
import { HorizontalPositionAlign, VerticalPositionAlign } from "file/shared/alignment";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("Align")
export class Align extends XmlComponent {
    constructor(value: HorizontalPositionAlign | VerticalPositionAlign) {
        super("wp:align");
        this.root.push(value);
    }
}
