// http://officeopenxml.com/drwSp-prstGeom.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("AdjustmentValues")
export class AdjustmentValues extends XmlComponent {
    constructor() {
        super("a:avLst");
    }
}
