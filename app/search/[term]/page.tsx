import { notFound } from 'next/navigation';
import React from 'react'

type Props ={
    params: {
        term: string;
    }
}

function searchPage({params: {term}}: Props) {
    if(!term) notFound();

    const termToUse = decodeURI(term);
   
  return (
    <div>Welcome to the search page: {termToUse}</div>
  )
}

export default searchPage;