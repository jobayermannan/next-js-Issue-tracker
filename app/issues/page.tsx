import { Button, Link } from '@radix-ui/themes';
import React from 'react';

const IssuesPage = () => {
  return (
    <div>
      <Link href="/issues/new" >
        <Button>
          New Issue
        </Button>
      </Link>
    </div>
  );
};

export default IssuesPage;