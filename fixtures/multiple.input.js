import React from 'react'

const Loading = () => "Loading..."

export default function(){
  return <>
    <div suspense={<Loading />} />
    <div suspense={<Loading />} />
    <div suspense={<Loading />} />
    <div suspense={<Loading />} />
    <div suspense={<Loading />} />
    <div suspense={<Loading />} />
  </>
}

