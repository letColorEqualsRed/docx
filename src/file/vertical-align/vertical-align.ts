import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

// <xsd:complexType name="CT_VerticalJc">
//     <xsd:attribute name="val" type="ST_VerticalJc" use="required"/>
// </xsd:complexType>

// <xsd:simpleType name="ST_VerticalJc">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="top"/>
//   <xsd:enumeration value="center"/>
//   <xsd:enumeration value="both"/>
//   <xsd:enumeration value="bottom"/>
// </xsd:restriction>
// </xsd:simpleType>
export enum VerticalAlign {
    BOTH = "both",
    BOTTOM = "bottom",
    CENTER = "center",
    TOP = "top",
}
export class VerticalAlignAttributes extends XmlAttributeComponent<{
    readonly verticalAlign?: VerticalAlign;
}> {
    protected readonly xmlKeys = {
        verticalAlign: "w:val",
    };
}

@RegisterXmlComponent("VerticalAlignElement")
export class VerticalAlignElement extends XmlComponent {
    constructor(value: VerticalAlign) {
        super("w:vAlign");
        this.root.push(new VerticalAlignAttributes({ verticalAlign: value }));
    }
}
