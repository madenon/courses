import userModel from "../models/userModel.js";
//ajout de produit au panier de l utilisateur par clique

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1
      }
    }else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }
    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({success:true, message:"L'article a bien été ajouté qu panier"})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }

};

// mise a jour du panier
const updateCart = async (req, res) => {
    try {
        
        const {userId, itemId, size, quantity} = req.body
        
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true, message:"le panier a  été  mise  à jour"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})

    }
};

const getUser = async (req, res) => {
    try {
        const {userId} = req.body
       
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
      res.json({success:true, cartData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})

        
    }
};

export { addToCart, updateCart, getUser };
