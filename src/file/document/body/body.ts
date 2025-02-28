import { RegisterXmlComponent } from "converter/decorators"
import { IContext, IXmlableObject, XmlComponent } from "file/xml-components";

import { Paragraph, ParagraphProperties } from "../..";
import { ISectionPropertiesOptions, SectionProperties } from "./section-properties/section-properties";

@RegisterXmlComponent("Body")
export class Body extends XmlComponent {
    private readonly sections: SectionProperties[] = [];

    constructor() {
        super("w:body");
    }

    /**
     * Adds new section properties.
     * Note: Previous section is created in paragraph after the current element, and then new section will be added.
     * The spec says:
     *  - section element should be in the last paragraph of the section
     *  - last section should be direct child of body
     * @param options new section options
     */
    public addSection(options: ISectionPropertiesOptions): void {
        const currentSection = this.sections.pop() as SectionProperties;
        this.root.push(this.createSectionParagraph(currentSection));

        this.sections.push(new SectionProperties(options));
    }

    public prepForXml(context: IContext): IXmlableObject | undefined {
        if (this.sections.length === 1) {
            this.root.splice(0, 1);
            this.root.push(this.sections.pop() as SectionProperties);
        }

        return super.prepForXml(context);
    }

    public push(component: XmlComponent): void {
        this.root.push(component);
    }

    private createSectionParagraph(section: SectionProperties): Paragraph {
        const paragraph = new Paragraph({});
        const properties = new ParagraphProperties({});
        properties.push(section);
        paragraph.addChildElement(properties);
        return paragraph;
    }
}
