// http://www.datypic.com/sc/ooxml/e-m_sSubPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("MathSubScriptProperties")
export class MathSubScriptProperties extends XmlComponent {
    constructor() {
        super("m:sSubPr");
    }
}
