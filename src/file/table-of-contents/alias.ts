import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class AliasAttributes extends XmlAttributeComponent<{ readonly alias: string }> {
    protected readonly xmlKeys = { alias: "w:val" };
}

@RegisterXmlComponent("Alias")
export class Alias extends XmlComponent {
    constructor(alias: string) {
        super("w:alias");
        this.root.push(new AliasAttributes({ alias }));
    }
}
