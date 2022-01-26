// http://officeopenxml.com/drwPicFloating-textWrap.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("WrapNone")
export class WrapNone extends XmlComponent {
    constructor() {
        super("wp:wrapNone");
    }
}
