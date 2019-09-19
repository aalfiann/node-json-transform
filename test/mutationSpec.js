var DataTransform = require('../index.js').DataTransform,
	_ = require("lodash");

var data = {
	posts: [{
		title: "title1"
	}]
};

var map = {
	list: 'posts',
	item: {
		name: "title",
	}
};

function deepClone(data) {
	return JSON.parse(JSON.stringify(data));
}


describe("node-json-transform", function() {

	it("should not manipulate the raw data", function() {

		var clone = deepClone(data);

		var dataTransform = DataTransform(data, map);
		dataTransform.transform();

		expect(clone).toEqual(data);

	});

	it("should not manipulate the raw data", function() {

		var clone = deepClone(map);

		var dataTransform = DataTransform(data, map);
		dataTransform.transform();

		expect(clone).toEqual(map);

	});

});