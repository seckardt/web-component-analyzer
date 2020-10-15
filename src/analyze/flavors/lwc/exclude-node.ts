import { Node } from "typescript";
import { AnalyzerVisitContext } from "../../analyzer-visit-context";
import { isLwcComponent } from "./utils";

export function excludeNode(node: Node, context: AnalyzerVisitContext): boolean | undefined {
	if (context.config.analyzeDependencies) {
		return undefined;
	}

	const { ts } = context;
	return !ts.isClassDeclaration(node) || !isLwcComponent(node, context);
}
