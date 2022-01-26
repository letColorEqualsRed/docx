import { SpaceType } from "file/space-type";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class TextAttributes extends XmlAttributeComponent<{ readonly space: SpaceType }> {
    protected readonly xmlKeys = { space: "xml:space" };
}

@RegisterXmlComponent("Page")
export class Page extends XmlComponent {
    constructor() {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push("PAGE");
    }
}

@RegisterXmlComponent("NumberOfPages")
export class NumberOfPages extends XmlComponent {
    constructor() {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push("NUMPAGES");
    }
}

@RegisterXmlComponent("NumberOfPagesSection")
export class NumberOfPagesSection extends XmlComponent {
    constructor() {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push("SECTIONPAGES");
    }
}
