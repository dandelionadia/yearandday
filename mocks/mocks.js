import { setupWorker, rest } from 'msw'
import allProducts from './products.json'
import allCategories from './category.json'

// Configure mocking routes
export const worker = setupWorker(
  rest.get('/products', (req, res, ctx) => {
    const categoryId = req.url.searchParams.get('categoryId')

    if (categoryId) {
      const productsInCategory = allProducts.filter((product) => {
        return product.categoryId === categoryId
      })

      return res(ctx.json(productsInCategory))
    }

    return res(
      // send JSON response body
      ctx.json(allProducts)
    )
  }),

  // /category/abc-123
  rest.get('/category/:categoryId', (req, res, ctx) => {
    const { categoryId } = req.params

    const category = allCategories.find((category) => {
      return category.id == categoryId
    })

    return res(ctx.json(category))
  })
)
