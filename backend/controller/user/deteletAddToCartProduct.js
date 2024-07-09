const addToCartModel = require("../../models/cartProduct")

const deleteAddToCartProduct = async (req, res) => {
  try {
    const currentUserId = req.currentUserId
    const addToCartProductId = req.body._id

    const deleteProduct = await addToCartModel.deleteOne({ _id: addToCartProductId })

    res.json({
      message: "Product Deleted from cart",
      error: false,
      success: true,
      data: deleteProduct
    })
  } catch (error) {
    res.json({
      message: error?.message || error,
      error: true,
      success: false
    })
  }
}

module.exports = deleteAddToCartProduct