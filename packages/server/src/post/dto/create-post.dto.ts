export type CreatePostDto = {
  text: string;
  threadId: number;
  parentId?: number;
};
