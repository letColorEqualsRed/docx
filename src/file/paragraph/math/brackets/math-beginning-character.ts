// http://www.datypic.com/sc/ooxml/e-m_begChr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class MathBeginningCharacterAttributes extends XmlAttributeComponent<{ readonly character: string }> {
    protected readonly xmlKeys = { character: "m:val" };
}

@RegisterXmlComponent("MathBeginningCharacter")
export class MathBeginningCharacter extends XmlComponent {
    constructor(character: string) {
        super("m:begChr");

        this.root.push(new MathBeginningCharacterAttributes({ character }));
    }
}
