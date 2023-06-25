export function IsNode(e: EventTarget | null): e is Node {
    if (e && "nodeType" in e) {
        return true;
    }
}
