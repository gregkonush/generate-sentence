import * as React from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import 'twin.macro'
import { useForm } from 'react-hook-form'
import { Input, Label } from '@components'

const fetcher = (url) => fetch(url).then((r) => r.json())

export const Home = (): JSX.Element => {
  const { register, watch } = useForm({
    defaultValues: { subject: 'dog', verb: 'eat', object: 'water', tense: 'present', progressive: false },
  })
  const { data } = useSWR(
    [
      `https://lt-nlgservice.herokuapp.com/rest/english/realise?subject=${watch('subject')}&verb=${watch(
        'verb'
      )}&object=${watch('object')}&tense=${watch('tense')}&${watch('progressive') ? 'progressive=progressive' : ''}`,
      watch('subject'),
      watch('verb'),
      watch('object'),
    ],
    fetcher,
    { dedupingInterval: 100 }
  )

  return (
    <div tw="h-screen bg-gray-900 text-gray-200 p-10">
      <Head>
        <title>Complete your sentence</title>
      </Head>
      <form tw="flex flex-col space-y-3 md:w-2/3 lg:w-1/2 2xl:w-1/3">
        <Input register={register} name="subject" label="Enter a subject" />
        <Input register={register} name="verb" label="Enter a verb" />
        <Input register={register} name="object" label="Enter an object" />
        <Label htmlFor="tense" text="Choose a tense" />
        <select tw="p-2 text-gray-700 space-y-0" {...register('tense')}>
          <option>past</option>
          <option>present</option>
          <option>future</option>
        </select>
        <div tw="flex space-x-2 items-center">
          <input type="checkbox" {...register('progressive')} />
          <Label htmlFor="progressive" text="progressive?" />
        </div>
        <hr tw="border-gray-700" />
      </form>
      <div tw="mt-3">Result:</div>
      {data?.sentence ? (
        <div tw="text-blue-300 text-2xl">{data.sentence}</div>
      ) : (
        <svg tw="animate-spin h-5 w-5 m-2" viewBox="0 0 24 24">
          <circle tw="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            tw="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
    </div>
  )
}

export default Home
