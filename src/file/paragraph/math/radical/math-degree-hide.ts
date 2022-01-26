// http://www.datypic.com/sc/ooxml/e-m_degHide-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class MathDegreeHideAttributes extends XmlAttributeComponent<{ readonly hide: number }> {
    protected readonly xmlKeys = { hide: "m:val" };
}

@RegisterXmlComponent("MathDegreeHide")
export class MathDegreeHide extends XmlComponent {
    constructor() {
        super("m:degHide");

        this.root.push(new MathDegreeHideAttributes({ hide: 1 }));
    }
}
