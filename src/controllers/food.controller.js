import Food from "../models/food.model";

export const getAllFood = async function (req, res) {
  try {

    const result = await Food.find();
    return res.status(201).json({
      msg: "Informacion obtenida exitosamente",
      data: result
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};

export const getFood = async function (req, res) {
  try {
    const result = await Food.findById(req.params._id);
    return res.status(201).json({
      msg: "Informacion obtenida exitosamente",
      data: result
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};

export const addFood = async function (req, res) {
  try {
    const task = new Food(req.body);
    await task.save();

    return res.status(201).json({
      msg: "Comida creada exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};

export const updateFood = async function (req, res) {
  try {
    const { _id } = req.params;
    await Food.updateOne({_id: _id}, req.body);

    return res.status(201).json({
      msg: "Actualizado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};

export const deleteFood = async function (req, res) {
  try {
    let { _id } = req.params;
    await Food.remove({_id: _id});

    return res.status(201).json({
      msg: "Eliminado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error"
    });
  }
};
