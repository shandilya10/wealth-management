function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.symbol == (searchTerm);
    });
  }
  
  describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      
      const input = [
        { symbol: "AAPL", name: "Apple Inc." },
        { symbol: "AAL", name: "American Airlines Group Inc." },
        { symbol: "AAXN", name: "Axon Enterprise Inc." },
        { symbol: "AAOI", name: "Applied Optoelectronics Inc." },
        { symbol: "AAN", name: "Aaron's Holdings Company Inc." }
      ];

      const output = [{ symbol: "AAPL", name: "Apple Inc." }];
  
      expect(filterByTerm(input, "AAPL")).toEqual(output);
      //expect(filterByTerm(input, "XYZ")).toEqual(output);

    });
  });