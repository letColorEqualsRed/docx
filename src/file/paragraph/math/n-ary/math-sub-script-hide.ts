// http://www.datypic.com/sc/ooxml/e-m_subHide-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class MathSubScriptHideAttributes extends XmlAttributeComponent<{ readonly hide: number }> {
    protected readonly xmlKeys = { hide: "m:val" };
}

@RegisterXmlComponent("MathSubScriptHide")
export class MathSubScriptHide extends XmlComponent {
    constructor() {
        super("m:subHide");

        this.root.push(new MathSubScriptHideAttributes({ hide: 1 }));
    }
}
