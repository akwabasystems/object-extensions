import "../../src/arrays";


describe("Array extensions", () => {
    const numbers = [1, 2, 3, 4, 5];

    it("should return the first item in an array", () => {
        expect(Array.first(numbers)).toBe(1);
    });

    it("should return the last item in an array", () => {
        expect(Array.last(numbers)).toBe(5);
    });

    it("should return the item at a given index in an array", () => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        expect(Array.itemAt(days, 0)).toBe("Sun");
        expect(Array.itemAt(days, 4)).toBe("Thu");
        expect(Array.itemAt(days, 8)).toBeUndefined();
        expect(Array.itemAt(days, "invalidIndex")).toBeUndefined();
    });

    it("should return the smallest item in an array", () => {
        expect(Array.min(numbers)).toBe(1);
    });

    it("should return the largest item in an array", () => {
        expect(Array.max(numbers)).toBe(5);
    });

    it("should clear the contexts of an array", () => {
        const letters = ["X", "Y", "Z"];
        expect(Array.isEmpty(letters)).toBeFalsy();

        Array.clear(letters);
        expect(Array.isEmpty(letters)).toBeTruthy();
    });

    it("should partition an array into two groups", () => {
        const list = numbers.concat(6, 7, 8, 9, 10);
        const partitions = Array.partition(list, (n) => n % 2 === 0);

        expect(partitions.length).toBe(2);
        expect(partitions[0]).toEqual([2, 4, 6, 8, 10]);
        expect(partitions[1]).toEqual([1, 3, 5, 7, 9]);
    });

    it("should specifies whether an array contains an item", () => {
        const numbers = [1, 2, 3];
        expect(Array.contains(numbers, 1)).toBeTruthy();

        const indexOf = Array.prototype.indexOf;
        Array.prototype.indexOf = {};
        expect(Array.contains(numbers, 3)).toBeTruthy();
        expect(Array.contains(numbers, 5)).toBeFalsy();
        Array.prototype.indexOf = indexOf;
    });

});
