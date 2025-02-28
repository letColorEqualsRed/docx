// http://www.datypic.com/sc/ooxml/e-m_sPre-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../../math-component";
import { MathBase, MathSubScriptElement, MathSuperScriptElement } from "../../n-ary";
import { MathPreSubSuperScriptProperties } from "./math-pre-sub-super-script-function-properties";

export interface IMathPreSubSuperScriptOptions {
    readonly children: MathComponent[];
    readonly subScript: MathComponent[];
    readonly superScript: MathComponent[];
}

@RegisterXmlComponent("MathPreSubSuperScript")
export class MathPreSubSuperScript extends XmlComponent {
    constructor(options: IMathPreSubSuperScriptOptions) {
        super("m:sPre");

        this.root.push(new MathPreSubSuperScriptProperties());
        this.root.push(new MathBase(options.children));
        this.root.push(new MathSubScriptElement(options.subScript));
        this.root.push(new MathSuperScriptElement(options.superScript));
    }
}
