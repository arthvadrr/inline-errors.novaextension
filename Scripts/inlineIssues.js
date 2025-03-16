class InlineErrorLens {
	constructor() {
		console.log('🔹 InlineErrorLens Initialized');
		this.issueCollection = new IssueCollection('Inline Errors');
	}

	updateIssues(editor) {
		console.log(
			`📌 updateIssues() manually called for ${editor.document.path}`
		);

		// Clear previous issues
		this.issueCollection.clear();

		// ✅ Create a test issue to check if inline issues work
		let testIssue = new nova.Issue();
		testIssue.message = `⚠️ Example Inline Issue`;
		testIssue.severity = nova.IssueSeverity.Error;
		testIssue.range = new Range(0, 0, 0, 5); // Line 1, characters 1-5

		this.issueCollection.set(editor.document.uri, [testIssue]);
		console.log('✅ Example issue injected into Nova');
	}
}

module.exports = new InlineErrorLens();
