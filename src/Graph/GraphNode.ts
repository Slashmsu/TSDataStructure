import { GraphEdge } from "./GraphEdge";

export class GraphNode<T> {
    private _value:  T;
    private _edges:  GraphEdge<T>[];


    constructor(value: T = null) {
        this._value = value;
        this._edges = [];
    }

    /**
     * Returns node's value
     * @returns {T}
     * @memberof GraphNode
     * @method getValue
    */
    getValue(): T {
        return this._value;
    }

    /**
     * Sets node's value
     * @param {T} value
     * @memberof GraphNode
     * @method setValue
     * @returns {void}
     */
    setValue(value: T): void {
        this._value = value;
    }

    /**
     * Returns node's edges
     * @returns {GraphEdge<T>[]}
     * @memberof GraphNode
     * @method getEdges
    */
    getEdges(): GraphEdge<T>[] {
        return this._edges;
    }
    
    /**
     * Returns node's edges
     * @returns {GraphEdge<T>[]}
     * @memberof GraphNode
     * @method getEdges
     * @returns {void}
     * @param {GraphEdge<T>[]} edges
     */
    setEdges(edges: GraphEdge<T>[]): void {
        this._edges = edges;
    }

    /**
     * Adds edge to node's edges
     * @param {GraphEdge<T>} edge
     * @memberof GraphNode
     * @method addEdge
     * @returns {void}
     */
    addEdge(edge: GraphEdge<T>): void {
        this._edges.push(edge);
    }

    /**
     * Returns 'true' if node has edge with 'to' node and 'false' if no.
     * @param {GraphNode<T>} to
     * @memberof GraphNode
     * @method hasEdge
     * @returns {boolean}
     */
    hasEdge(to: GraphNode<T>): boolean {
        return this._edges.some(edge => edge.getTo() === to);
    }

    /**
     * Returns edge with 'to' node.
     * @param {GraphNode<T>} to
     * @memberof GraphNode
     * @method getEdge
     * @returns {GraphEdge<T>}
     * @throws {Error} if no edge with 'to' node
     */
    getEdge(to: GraphNode<T>): GraphEdge<T> {
        const edge = this._edges.find(e => e.getTo() === to);
        if (!edge) {
            throw new Error(`No edge with 'to' node`);
        }
        return edge;
    }

    /**
     * Returns 'true' if node has edge with 'to' node and 'false' if no.
     * @param {GraphNode<T>} to
     * @memberof GraphNode
     * @method hasEdge
     * @returns {boolean}
     */
    hasEdgeWith(to: GraphNode<T>): boolean {
        return this._edges.some(edge => edge.getTo() === to);
    }

}
    