import { GraphNode } from "./GraphNode";

export class GraphEdge<T> {
    private _from: GraphNode<T>;
    private _to: GraphNode<T>;
    private _weight: number;

    constructor(from: GraphNode<T>, to: GraphNode<T>, weight: number = 0) {
        this._from = from;
        this._to = to;
        this._weight = weight;
    }

    /**
     * Returns 'true' if 'from' and 'to' nodes are equal and 'false' if no.
     * @returns {GraphNode<T>}
     */
    getFrom(): GraphNode<T> {
        return this._from;
    }

    /**
     * Returns 'to' node.
     * @returns {GraphNode<T>}
     */
    getTo(): GraphNode<T> {
        return this._to;
    }

    /**
     * Returns 'true' if 'from' and 'to' nodes are equal and 'false' if no.
     * @returns {number}
     */
    getWeight(): number {
        return this._weight;
    }

    /**
     * Sets 'weight' of edge.
     * @param weight 
     */
    setWeight(weight: number): void {
        this._weight = weight;
    }

    /**
     * Sets 'weight' of edge.
     * @param from 
     */
    setFrom(from: GraphNode<T>): void {
        this._from = from;
    }

    /**
     * Sets 'weight' of edge.
     * @param to GraphNode<T>
     */
    setTo(to: GraphNode<T>): void {
        this._to = to;
    }

    /**
     * Sets from and to nodes and weight of edge.
     * @param from GraphNode<T>
     * @param to GraphNode<T>
     */
    setFromTo(from: GraphNode<T>, to: GraphNode<T>): void {
        this._from = from;
        this._to = to;
    }

    /**
     * Sets from and to nodes and weight of edge.
     * @param from GraphNode<T>
     * @param to GraphNode<T>
     * @param weight number
     */
    setFromToWeight(from: GraphNode<T>, to: GraphNode<T>, weight: number): void {
        this._from = from;
        this._to = to;
        this._weight = weight;
    }

}