// http://www.datypic.com/sc/ooxml/e-m_sPrePr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("MathPreSubSuperScriptProperties")
export class MathPreSubSuperScriptProperties extends XmlComponent {
    constructor() {
        super("m:sPrePr");
    }
}
