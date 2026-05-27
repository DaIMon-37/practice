import { User } from '../model/user.js';
export const getAllUsers = async (req, res) => {
    const users = await User.find();

    res.json({
        sucess: true,
        users
    });
};

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
    name, email, password
    })

    res.status(200).cookie("temp").json({
        sucess: true,
        message : "User registered sucessfully"
    })

};

export const special = async (req, res) => {
    res.json({
        success: true,
        message : "Hahahaha "
    });
};

export const getUserById = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({
        success: true,
        user
    });
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    await user.remove();

    res.status(200).json({
        success: true,
        message : "User deleted sucessfully"
    });
};

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({
        success: true,
        message : "User updated sucessfully"
    });
};