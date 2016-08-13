interface Metadata {
    id: string;
    user_id: string;
    timestamp: number;
  }

export class Todo {
  metadata: Metadata;
  body: string;
}
