// Scott Hale (Oxford Internet Institute)
// Requires sigma.js and jquery to be loaded
// based on parseGexf from Mathieu Jacomy @ Sciences Po Médialab & WebAtlas

sigma.publicPrototype.parseJson = function(jsonPath, callback) {
	var sigmaInstance = this;
	var edgeId = 0;
	jQuery.getJSON(jsonPath, function(data) {
		for (var i=0; i<data.nodes.length; i++){
			var node=data.nodes[i];
			sigmaInstance.addNode(node.id, node);
		}

		for (var i=0; i<data.edges.length; i++){
			var edge=data.edges[i];
			sigmaInstance.addEdge(edge.id, edge.source, edge.target, edge);
		}

		if (callback) {
			callback.call(this);
		}
	});
};
