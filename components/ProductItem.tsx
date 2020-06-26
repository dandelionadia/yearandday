import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
`

interface propsState {
  data: Array<{
    title: string
    categoryId: string
  }>
  loading: boolean
}

interface Props {
  categoryId: string
}

export const ProductItem: React.FC<Props> = ({ categoryId }) => {
  const [state, setState] = useState<propsState>({
    data: null,
    loading: false,
  })

  useEffect(() => {
    setState({ data: null, loading: true })

    // /products?categoryId=abc-123
    // /products?categoryId=def-456
    fetch(`/products?categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((res) => setState({ data: res, loading: false }))
      .catch(() => setState({ data: null, loading: false }))
  }, [])

  if (state.loading) {
    return <p>Loading...</p>
  }

  if (!state.data) {
    return <p>No data</p>
  }

  return (
    <>
      {state.data.map((product) => (
        <p>{product.title}</p>
      ))}
    </>
  )
}
