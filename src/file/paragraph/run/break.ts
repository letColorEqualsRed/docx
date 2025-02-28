// http://officeopenxml.com/WPtextSpecialContent-break.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

// <xsd:group name="EG_RunInnerContent">
//   ...
//   <xsd:element name="br" type="CT_Br"/>

// <xsd:complexType name="CT_Br">
//     <xsd:attribute name="type" type="ST_BrType" use="optional"/>
//     <xsd:attribute name="clear" type="ST_BrClear" use="optional"/>
// </xsd:complexType>

// <xsd:simpleType name="ST_BrType">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="page"/>
//   <xsd:enumeration value="column"/>
//   <xsd:enumeration value="textWrapping"/>
// </xsd:restriction>
// </xsd:simpleType>
// <xsd:simpleType name="ST_BrClear">
// <xsd:restriction base="xsd:string">
//   <xsd:enumeration value="none"/>
//   <xsd:enumeration value="left"/>
//   <xsd:enumeration value="right"/>
//   <xsd:enumeration value="all"/>
// </xsd:restriction>
// </xsd:simpleType>
@RegisterXmlComponent("Break")
export class Break extends XmlComponent {
    constructor() {
        super("w:br");
    }
}
