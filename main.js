function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    const vertices = Object.keys(graph);

    // Initialize distances for all vertices
    vertices.forEach(vertex => {
        distances[vertex] = vertex === start ? 0 : Infinity;
    });

    while (visited.size < vertices.length) {
        // Find the vertex with the minimum distance
        let minVertex = null;
        let minDistance = Infinity;

        vertices.forEach(vertex => {
            if (!visited.has(vertex) && distances[vertex] < minDistance) {
                minVertex = vertex;
                minDistance = distances[vertex];
            }
        });

        // Update distances to neighbors
        for (const neighbor in graph[minVertex]) {
            const distanceToNeighbor = graph[minVertex][neighbor];
            const totalDistance = distances[minVertex] + distanceToNeighbor;

            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
            }
        }

        // Mark the current vertex as visited
        visited.add(minVertex);
    }

    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Starting vertex
const startVertex = 'A';

// Calculate shortest distances
const shortestDistances = dijkstra(graph, startVertex);

console.log(shortestDistances);
