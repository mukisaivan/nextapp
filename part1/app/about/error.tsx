'use client';
import React from 'react'

export default function Error(
  { error,
    reset }:
    {
      error: Error
      reset: () => void
    }) {
  return (
    <>
      <h1>Something went wrong </h1>
      <button onClick={reset}>Refresh page</button>
    </>
  )
}
