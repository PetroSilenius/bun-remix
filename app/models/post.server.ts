import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";
export type { Post };

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(post: Omit<Post, "createdAt" | "updatedAt">) {
  return prisma.post.create({ data: post });
}
