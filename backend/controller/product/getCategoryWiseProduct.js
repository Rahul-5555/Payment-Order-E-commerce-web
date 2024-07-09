const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req?.body || req?.query
    const product = await productModel.find({ category })

    res.json({
      data: product,
      messege: "Product",
      success: true,
      error: false
    })

  } catch (error) {
    res.status(400).json({
      messege: error.messege || error,
      error: true,
      success: false
    })
  }
}

module.exports = getCategoryWiseProduct