// http://www.datypic.com/sc/ooxml/e-m_chr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class MathAccentCharacterAttributes extends XmlAttributeComponent<{ readonly accent: string }> {
    protected readonly xmlKeys = { accent: "m:val" };
}

@RegisterXmlComponent("MathAccentCharacter")
export class MathAccentCharacter extends XmlComponent {
    constructor(accent: string) {
        super("m:chr");

        this.root.push(new MathAccentCharacterAttributes({ accent }));
    }
}
