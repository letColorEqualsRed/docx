// http://www.datypic.com/sc/ooxml/e-w_fldSimple-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";
import { TextRun } from "./text-run";

class FldSimpleAttrs extends XmlAttributeComponent<{ readonly instr: string }> {
    protected readonly xmlKeys = { instr: "w:instr" };
}

@RegisterXmlComponent("SimpleField")
export class SimpleField extends XmlComponent {
    constructor(instruction: string, cachedValue?: string) {
        super("w:fldSimple");
        this.root.push(new FldSimpleAttrs({ instr: instruction }));
        if (cachedValue !== undefined) {
            this.root.push(new TextRun(cachedValue));
        }
    }
}

export class SimpleMailMergeField extends SimpleField {
    constructor(fieldName: string) {
        super(` MERGEFIELD ${fieldName} `, `«${fieldName}»`);
    }
}
