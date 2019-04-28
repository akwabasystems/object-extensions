import Extensions from "../../index";


describe("Object extensions", () => {

    it("should identify the type of an object", () => {
        const F = () => {};
        const undefinedVar = undefined;
        const definedVar = {};

        expect(Extensions.isArray([])).toBeTruthy();
        expect(Extensions.isString("Akwaba")).toBeTruthy();
        expect(Extensions.isNumber(2019)).toBeTruthy();
        expect(Extensions.isFunction(F)).toBeTruthy();
        expect(Extensions.isDefined(definedVar)).toBeTruthy();
        expect(Extensions.isUndefined(undefinedVar)).toBeTruthy();
    });

    it("should return an abstract function", () => {
        try {

            const callback = Extensions.abstractFunction();
            callback();

        } catch (e) {
            expect(e.message).toBe("This method is abstract and must be implemented.");
        }
    });

    it("should specify whether an object has a given method", () => {
        const config = {
            version: "1.0",
            init: () => {}
        };

        expect(Extensions.hasMethod(config, "init")).toBeTruthy();
        expect(Extensions.hasMethod(config, "version")).toBeFalsy();
    });

    it("should specify whether an object implements a given interface", () => {
        const protocol = {
            requiredMethods: ["initialize", "render", "handleActions"]
        };

        let component = {
            init: () => {},
            render: () => {}
        };

        expect(Extensions.implementsInterface(component, {})).toBeFalsy();
        expect(Extensions.implementsInterface(component, protocol)).toBeFalsy();

        component = {
            initialize: () => {},
            render: () => {},
            handleActions: () => {}
        };
        expect(Extensions.implementsInterface(component, protocol)).toBeTruthy();
    });

    it("should create an array from the items in the given object", () => {
        let items = {
            length: 3,
            "0": 1, 
            "1": 2,
            "2": 3
        };
        let itemList = Extensions.arrayFrom(items);
        
        expect(Extensions.isArray(itemList)).toBeTruthy();
        expect(itemList).toEqual([1, 2, 3]);

        items = {};
        itemList = Extensions.arrayFrom(items);
        expect(itemList).toEqual([]);

        items = {
            toArray: () => {
                return [4, 5];
            }
        };
        itemList = Extensions.arrayFrom(items);
        expect(itemList).toEqual([4, 5]);
    });

    it("should create an object from a list of keys and values", () => {
        const keys = ["name", "version", "describe"];
        const values = ["1UA", "1.0", () => "A cool app"];
        const app = Extensions.objectFrom(keys, values);

        expect(app.name).toBe("1UA");
        expect(app.version).toBe("1.0");
        expect(Extensions.isFunction(app.describe)).toBeTruthy();
        expect(app.describe()).toBe("A cool app");
    });

    it("should copy own keys from an object to another", () => {
        const source = {
            "name": "1UA", 
            "version": "1.0", 
            "describe": () => "A cool app"
        };
        const destination = Extensions.copyPropertiesFrom(source);

        expect(destination.name).toBe("1UA");
        expect(destination.version).toBe("1.0");
        expect(Extensions.isFunction(destination.describe)).toBeTruthy();
        expect(destination.describe()).toBe("A cool app");
    });

    it("should make the properties of an object iterable", () => {
        const steps = {
            "1": "Create package.json file", 
            "2": "Add dependencies", 
            "3": "Run npm install"
        };
        Extensions.makeIterable(steps);

        let iterator = steps[Symbol.iterator]();
        let currentStep = iterator.next();
        expect(currentStep.value).toBeUndefined();
        expect(currentStep.done).toBeTruthy();

        Extensions.makeIterable(steps, ["1", "2", "3"]);
        iterator = steps[Symbol.iterator]();
        expect(iterator).toBeDefined();
    
        currentStep = iterator.next();
        expect(currentStep).toEqual({value: "Create package.json file", done: false});
        
        currentStep = iterator.next();
        expect(currentStep).toEqual({value: "Add dependencies", done: false});

        currentStep = iterator.next();
        expect(currentStep).toEqual({value: "Run npm install", done: false});

        currentStep = iterator.next();
        expect(currentStep.done).toBeTruthy();
    });

    it("should generate unique identifiers", () => {
        const uuid = Extensions.generateUUID();
        expect(Extensions.isString(uuid)).toBeTruthy();
        expect(uuid.length).toBe(36);
    });

});