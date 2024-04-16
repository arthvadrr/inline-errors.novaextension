class IssuesProvider {
  constructor() {}

  provideIssues() {
    let issues = [];
    let issue = new Issue();

    issue.message = "Invalid syntax: Missing semicolon";
    issue.severity = IssueSeverity.Warning;
    issue.line = 4;
    issue.column = 0;
    issues.push(issue);

    return issues;
  }
}

nova.assistants.registerIssueAssistant("*", new IssuesProvider());
