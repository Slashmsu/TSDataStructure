import { Graph } from '../../src/Graph/Graph';
import { expect } from 'chai';

describe('Graph', () => {
    let graph: Graph<string>;

    beforeEach(() => {
        graph = new Graph<string>();
    });

    it('bfs should visit nodes in breadth first order', () => {
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');

        const order = graph.bfs('A');
        expect(order).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
    });

    it('dfs should visit nodes in depth first order', () => {
        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');

        const order = graph.dfs('A');
        expect(order).to.deep.equal(['A', 'B', 'D', 'C', 'E']);
    });

    it('shortestPath should return path with minimal weight', () => {
        graph.addEdge('A', 'B', 1);
        graph.addEdge('B', 'C', 2);
        graph.addEdge('A', 'C', 5);

        const path = graph.shortestPath('A', 'C');
        expect(path).to.deep.equal(['A', 'B', 'C']);
    });

    it('should be iterable with for-of', () => {
        graph.addVertex('X');
        graph.addVertex('Y');
        const nodes: string[] = [];
        for (const v of graph) {
            nodes.push(v);
        }
        expect(new Set(nodes)).to.deep.equal(new Set(['X', 'Y']));
    });
});
