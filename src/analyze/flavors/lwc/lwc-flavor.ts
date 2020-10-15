import { AnalyzerFlavor } from "../analyzer-flavor";
import { discoverMembers } from "./discover-members";
import { discoverDefinitions } from "./discover-definitions";
import { refineFeature } from "./refine-feature";
import { excludeNode } from "./exclude-node";

/**
 * Flavors for analyzing LWC related features: https://lwc.dev/
 */
export class LwcFlavor implements AnalyzerFlavor {
	excludeNode = excludeNode;
	discoverDefinitions = discoverDefinitions;
	discoverFeatures = {
		member: discoverMembers
	};

	refineFeature = refineFeature;
}
