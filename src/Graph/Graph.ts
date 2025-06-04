export class Graph<T> {

    // =========================================================================
    // Private properties
    // =========================================================================
    private adjacency: Map<T, Map<T, number>> = new Map();

    // =========================================================================
    // Public methods
    // =========================================================================

    /**
     * Adds a vertex to the graph.
     * @param value Vertex value
     */
    public addVertex(value: T): void {
        if (!this.adjacency.has(value)) {
            this.adjacency.set(value, new Map());
        }
    }

    /**
     * Adds an edge between two vertices.
     * @param from Source vertex
     * @param to Destination vertex
     * @param weight Weight of the edge (default 1)
     */
    public addEdge(from: T, to: T, weight: number = 1): void {
        this.addVertex(from);
        this.addVertex(to);
        this.adjacency.get(from).set(to, weight);
    }

    /**
     * Performs breadth-first search starting from a vertex.
     * @param start Starting vertex
     * @returns Array of visited vertices in BFS order
     */
    public bfs(start: T): T[] {
        if (!this.adjacency.has(start)) {
            return [];
        }
        const visited = new Set<T>();
        const queue: T[] = [];
        const result: T[] = [];
        visited.add(start);
        queue.push(start);
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (const neighbour of this.adjacency.get(vertex).keys()) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
        return result;
    }

    /**
     * Performs depth-first search starting from a vertex.
     * @param start Starting vertex
     * @returns Array of visited vertices in DFS order
     */
    public dfs(start: T): T[] {
        const result: T[] = [];
        const visited = new Set<T>();
        const dfsVisit = (vertex: T): void => {
            visited.add(vertex);
            result.push(vertex);
            for (const neighbour of this.adjacency.get(vertex).keys()) {
                if (!visited.has(neighbour)) {
                    dfsVisit(neighbour);
                }
            }
        };
        if (this.adjacency.has(start)) {
            dfsVisit(start);
        }
        return result;
    }

    /**
     * Finds the shortest path between two vertices using Dijkstra's algorithm.
     * Edge weights must be non-negative.
     * @param start Source vertex
     * @param end Destination vertex
     * @returns Array representing the path from start to end (inclusive). Empty if no path.
     */
    public shortestPath(start: T, end: T): T[] {
        if (!this.adjacency.has(start) || !this.adjacency.has(end)) {
            return [];
        }
        const distances = new Map<T, number>();
        const previous = new Map<T, T | null>();
        const queue = new Set<T>();

        for (const vertex of this.adjacency.keys()) {
            distances.set(vertex, Infinity);
            previous.set(vertex, null);
            queue.add(vertex);
        }
        distances.set(start, 0);

        while (queue.size > 0) {
            let minVertex: T = null;
            let minDistance = Infinity;
            for (const vertex of queue) {
                const dist = distances.get(vertex);
                if (dist < minDistance) {
                    minDistance = dist;
                    minVertex = vertex;
                }
            }

            if (minVertex === null) {
                break;
            }
            queue.delete(minVertex);

            if (minVertex === end) {
                break;
            }

            const neighbours = this.adjacency.get(minVertex);
            for (const [n, weight] of neighbours) {
                const alt = distances.get(minVertex) + weight;
                if (alt < distances.get(n)) {
                    distances.set(n, alt);
                    previous.set(n, minVertex);
                }
            }
        }

        const path: T[] = [];
        let current: T = end;
        if (!previous.has(end) && start !== end) {
            return [];
        }
        while (current !== null && previous.has(current)) {
            path.unshift(current);
            current = previous.get(current);
        }
        if (current === start) {
            path.unshift(start);
        }
        return path;
    }
}
