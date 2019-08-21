/*
 * Participants
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import DialogComponent from './Dialog';

export default function Participants() {

  return (
    <div>
      <Helmet>
        <title>Participants demo</title>
        <meta
          name="description"
          content="Participants demo"
        />
      </Helmet>
      <DialogComponent />
    </div>
  );
}


