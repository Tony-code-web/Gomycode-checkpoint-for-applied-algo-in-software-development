# Gomycode-checkpoint-for-applied-algo-in-software-development


---

# Implementing Dijkstra's Algorithm in JavaScript

## Introduction
This task focuses on implementing Dijkstra's algorithm in JavaScript to find the shortest path in a weighted graph. By completing this task, you'll gain practical experience in implementing a fundamental graph algorithm and understanding its application in solving real-world problems.

## Dijkstra's Algorithm Implementation

### Function Description
Write a JavaScript function named `dijkstra` that takes the following parameters:

- **graph**: An object representing the weighted graph. Each key represents a vertex, and the corresponding value is an array of adjacent vertices with their respective weights. For example:
    ```javascript
    const graph = {
        'A': { 'B': 4, 'C': 2 },
        'B': { 'A': 4, 'C': 5, 'D': 10 },
        'C': { 'A': 2, 'B': 5, 'D': 3 },
        'D': { 'B': 10, 'C': 3 }
    };
    ```

- **start**: The starting vertex from which to find the shortest paths.

### Function Signature
```javascript
function dijkstra(graph, start) {
    // Function implementation goes here
}
```

### Return Value
The function should return an object representing the shortest distances from the starting vertex to all other vertices. The keys of the object will be the vertices, and the corresponding values will be the shortest distances. For example, calling `dijkstra(graph, 'A')` should return:
```javascript
{
    'A': 0,
    'B': 4,
    'C': 2,
    'D': 5
}
```

## Usage
To use the `dijkstra` function, provide the weighted graph object and the starting vertex as parameters. For example:
```javascript
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
```

This will output the shortest distances from vertex 'A' to all other vertices in the graph.

---
