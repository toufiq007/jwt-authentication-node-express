"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/getUsers", (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully get users from this port",
    });
    return;
});
app.listen(3000, () => {
    console.log(`server is running on ${3000}`);
});
