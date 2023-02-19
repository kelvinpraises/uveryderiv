export interface Guild {
  name: string;
  cover: string;
  issues: Issue;
}

interface Issue {
  [key as string]: IssueData;
}

interface IssueData {
  type: "text" | "imageUrl";
  value: string;
}
