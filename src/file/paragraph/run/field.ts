import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

enum FieldCharacterType {
    BEGIN = "begin",
    END = "end",
    SEPARATE = "separate",
}

class FidCharAttrs extends XmlAttributeComponent<{ readonly type: FieldCharacterType; readonly dirty?: boolean }> {
    protected readonly xmlKeys = { type: "w:fldCharType", dirty: "w:dirty" };
}

@RegisterXmlComponent("Begin")
export class Begin extends XmlComponent {
    constructor(dirty?: boolean) {
        super("w:fldChar");
        this.root.push(new FidCharAttrs({ type: FieldCharacterType.BEGIN, dirty }));
    }
}

@RegisterXmlComponent("Separate")
export class Separate extends XmlComponent {
    constructor(dirty?: boolean) {
        super("w:fldChar");
        this.root.push(new FidCharAttrs({ type: FieldCharacterType.SEPARATE, dirty }));
    }
}

@RegisterXmlComponent("End")
export class End extends XmlComponent {
    constructor(dirty?: boolean) {
        super("w:fldChar");
        this.root.push(new FidCharAttrs({ type: FieldCharacterType.END, dirty }));
    }
}
