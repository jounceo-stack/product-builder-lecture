describe("Lotto Ball", () => {
    it("should generate 6 unique numbers", () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        expect(numbers.size).toBe(6);
    });
});
