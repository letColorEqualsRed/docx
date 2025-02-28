// http://www.datypic.com/sc/ooxml/e-m_endChr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class MathEndingCharacterAttributes extends XmlAttributeComponent<{ readonly character: string }> {
    protected readonly xmlKeys = { character: "m:val" };
}

@RegisterXmlComponent("MathEndingCharacter")
export class MathEndingCharacter extends XmlComponent {
    constructor(character: string) {
        super("m:endChr");

        this.root.push(new MathEndingCharacterAttributes({ character }));
    }
}
