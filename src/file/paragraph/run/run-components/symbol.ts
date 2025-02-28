import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class SymbolAttributes extends XmlAttributeComponent<{
    readonly char: string;
    readonly symbolfont?: string;
}> {
    protected readonly xmlKeys = {
        char: "w:char",
        symbolfont: "w:font",
    };
}

@RegisterXmlComponent("Symbol")
export class Symbol extends XmlComponent {
    constructor(char: string = "", symbolfont: string = "Wingdings") {
        super("w:sym");
        this.root.push(new SymbolAttributes({ char: char, symbolfont: symbolfont }));
    }
}
