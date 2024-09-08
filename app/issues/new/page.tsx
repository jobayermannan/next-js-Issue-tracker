'use client';
import { Button, TextField } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Dynamically import SimpleMDE to ensure it only loads on the client side
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const onSubmit = async (data: IssueForm) => {
    try {
      const response = await axios.post('/api/issues', data);
      console.log('Response:', response.data); // Log the response data
      router.push('/issues');
    } catch (error) {
      console.error('Failed to submit new issue:', error);
    }
  };

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root>
        <TextField.Slot>
          <input placeholder="Title" {...register('title')} className="input" />
        </TextField.Slot>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} placeholder="Description" />}
      />
      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;