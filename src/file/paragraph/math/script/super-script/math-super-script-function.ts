// http://www.datypic.com/sc/ooxml/e-m_sSup-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../../math-component";
import { MathBase, MathSuperScriptElement } from "../../n-ary";
import { MathSuperScriptProperties } from "./math-super-script-function-properties";

export interface IMathSuperScriptOptions {
    readonly children: MathComponent[];
    readonly superScript: MathComponent[];
}

@RegisterXmlComponent("MathSuperScript")
export class MathSuperScript extends XmlComponent {
    constructor(options: IMathSuperScriptOptions) {
        super("m:sSup");

        this.root.push(new MathSuperScriptProperties());
        this.root.push(new MathBase(options.children));
        this.root.push(new MathSuperScriptElement(options.superScript));
    }
}
