// http://www.datypic.com/sc/ooxml/e-m_d-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathComponent } from "../math-component";
import { MathBase } from "../n-ary";
import { MathBracketProperties } from "./math-bracket-properties";

@RegisterXmlComponent("MathRoundBrackets")
export class MathRoundBrackets extends XmlComponent {
    constructor(options: { readonly children: MathComponent[] }) {
        super("m:d");

        this.root.push(new MathBracketProperties());
        this.root.push(new MathBase(options.children));
    }
}
