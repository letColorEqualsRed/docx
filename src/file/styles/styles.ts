import { IDefaultStylesOptions } from "file/styles/factory";
import { RegisterXmlComponent } from "converter/decorators"
import { BaseXmlComponent, ImportedXmlComponent, XmlComponent } from "file/xml-components";
import { StyleForCharacter, StyleForParagraph } from "./style";
import { ICharacterStyleOptions } from "./style/character-style";
import { IParagraphStyleOptions } from "./style/paragraph-style";

export interface IStylesOptions {
    readonly default?: IDefaultStylesOptions;
    readonly initialStyles?: BaseXmlComponent;
    readonly paragraphStyles?: IParagraphStyleOptions[];
    readonly characterStyles?: ICharacterStyleOptions[];
    readonly importedStyles?: (XmlComponent | StyleForParagraph | StyleForCharacter | ImportedXmlComponent)[];
}

// <xsd:complexType name="CT_Styles">
// <xsd:sequence>
//   <xsd:element name="docDefaults" type="CT_DocDefaults" minOccurs="0"/>
//   <xsd:element name="latentStyles" type="CT_LatentStyles" minOccurs="0" maxOccurs="1"/>
//   <xsd:element name="style" type="CT_Style" minOccurs="0" maxOccurs="unbounded"/>
// </xsd:sequence>
// </xsd:complexType>
@RegisterXmlComponent("Styles")
export class Styles extends XmlComponent {
    constructor(options: IStylesOptions) {
        super("w:styles");

        if (options.initialStyles) {
            this.root.push(options.initialStyles);
        }

        if (options.importedStyles) {
            for (const style of options.importedStyles) {
                this.root.push(style);
            }
        }

        if (options.paragraphStyles) {
            for (const style of options.paragraphStyles) {
                this.root.push(new StyleForParagraph(style));
            }
        }

        if (options.characterStyles) {
            for (const style of options.characterStyles) {
                this.root.push(new StyleForCharacter(style));
            }
        }
    }
}
