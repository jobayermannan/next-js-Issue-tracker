import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/prisma/client';

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received data:', body); // Log the received data
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
      console.log('Validation error:', validation.error.format()); // Log validation errors
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const newIssue = await prisma.issue.create({
      data: { title: body.title, description: body.description },
    });

    console.log('New issue created:', newIssue); // Log the created issue
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error('Error creating new issue:', error); // Log any errors
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}