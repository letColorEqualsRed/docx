import { decimalNumber } from "file/values";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

import { ILevelsOptions, Level } from "./level";
import { MultiLevelType } from "./multi-level-type";

// <xsd:complexType name="CT_AbstractNum">
// <xsd:sequence>
//   <xsd:element name="nsid" type="CT_LongHexNumber" minOccurs="0"/>
//   <xsd:element name="multiLevelType" type="CT_MultiLevelType" minOccurs="0"/>
//   <xsd:element name="tmpl" type="CT_LongHexNumber" minOccurs="0"/>
//   <xsd:element name="name" type="CT_String" minOccurs="0"/>
//   <xsd:element name="styleLink" type="CT_String" minOccurs="0"/>
//   <xsd:element name="numStyleLink" type="CT_String" minOccurs="0"/>
//   <xsd:element name="lvl" type="CT_Lvl" minOccurs="0" maxOccurs="9"/>
// </xsd:sequence>
// <xsd:attribute name="abstractNumId" type="ST_DecimalNumber" use="required"/>
// </xsd:complexType>

// <xsd:attribute name="restartNumberingAfterBreak" type="w12:ST_OnOff"/>
// https://docs.microsoft.com/en-us/openspecs/office_standards/ms-docx/cbddeff8-01aa-4486-a48e-6a83dede4f13
class AbstractNumberingAttributes extends XmlAttributeComponent<{
    readonly abstractNumId: number;
    readonly restartNumberingAfterBreak: number;
}> {
    protected readonly xmlKeys = {
        abstractNumId: "w:abstractNumId",
        restartNumberingAfterBreak: "w15:restartNumberingAfterBreak",
    };
}

@RegisterXmlComponent("AbstractNumbering")
export class AbstractNumbering extends XmlComponent {
    public readonly id: number;

    constructor(id: number, levelOptions: ILevelsOptions[]) {
        super("w:abstractNum");
        this.root.push(
            new AbstractNumberingAttributes({
                abstractNumId: decimalNumber(id),
                restartNumberingAfterBreak: 0,
            }),
        );
        this.root.push(new MultiLevelType("hybridMultilevel"));
        this.id = id;

        for (const option of levelOptions) {
            this.root.push(new Level(option));
        }
    }
}
