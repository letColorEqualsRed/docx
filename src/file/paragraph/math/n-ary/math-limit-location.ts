// http://www.datypic.com/sc/ooxml/e-m_limLoc-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class MathLimitLocationAttributes extends XmlAttributeComponent<{ readonly value: string }> {
    protected readonly xmlKeys = { value: "m:val" };
}

@RegisterXmlComponent("MathLimitLocation")
export class MathLimitLocation extends XmlComponent {
    constructor() {
        super("m:limLoc");

        this.root.push(new MathLimitLocationAttributes({ value: "undOvr" }));
    }
}
