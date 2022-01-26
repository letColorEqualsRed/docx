import 'reflect-metadata'

type _XmlComponent = {
    constructor?: Function
}

export class XmlComponentRegistry {
    public static components: Map<string, _XmlComponent> = new Map();

    public static registerComponentConstructor = (componentName: string, constructor: Function) => {
        const component = XmlComponentRegistry.components.get(componentName) ?? {}
        Object.assign(component, { constructor })
        XmlComponentRegistry.components.set(componentName, component);
    }
}

export function RegisterXmlComponent(componentName: string) {
    return function <T extends { new(...args: any[]) }>(target: T) {
        XmlComponentRegistry.registerComponentConstructor(componentName, target);
        console.log(`XML component ${componentName} registered.`)
        return target
    }
}
